//@flow
import $ from 'jquery';
import MessageUtil from "zmplugin/utils/MessageUtil";

/**
 * AbstractHttpOperation class. Do no create instance of this class directly.
 */
export default class HttpOperation {

  /**
   * @param name{string}
   */
  constructor(name) {
    //Save the name.
    this._name = name;
    /**
     *
     * @type {*}
     * @private
     */
    this._message = null;
    //this._userCanCancel = false;
    /**
     *
     * @type {*}
     * @private
     */
    this._response = null;
    this._authenticator = Authenticator.getInstance();
    //TodoOm: Add request timeout header. Out requests may take long time.
    this._requestId = (++HttpOperation.__REQUESTID);

    /**
     * By default this variable is true. That means if auth is failed<br>
     * call will be put in the queue and reties on next user login.<br>
     * But by setting this value to false, will result in calling of failure section for this<br>
     * query. This way we can issue the background queries without worrying about them stuck and <br>
     * always be ensured the either successs or failure will be called in any case. - Om
     * @private
     * @type {boolean}
     */
    this._checkAuthFailures = true;
  }

  /**
   * By default this variable is true. That means if auth is failed<br>
   * call will be put in the queue and reties on next user login.<br>
   * But by setting this value to false, will result in calling of failure section for this<br>
   * query. This way we can issue the background queries without worrying about them stuck and <br>
   * always be ensured the either successs or failure will be called in any case. - Om
   * @public
   * @param value{boolean}
   */
  set checkAuthFailures(value) {
    this._checkAuthFailures = value;
  }

  /**
   * @see HttpOperation#checkAuthFailures
   * @return {boolean}
   */
  get checkAuthFailures() {
    return this._checkAuthFailures;
  }

  /**
   * Current Request Id
   * @return {number}
   */
  get requestId() {
    return this._requestId;
  }

  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {null|*}
   */
  get message() {
    return this._message;
  }

  /**
   *
   * @param message{null|*}
   */
  set message(message) {
    this._message = message;
  }

  //noinspection JSUnusedGlobalSymbols
  set authenticator(authenticator) {
    this._authenticator = authenticator;
  }

  /**
   * @param isAutoRefreshCall {boolean}
   * @returns {Promise.<*,ErrorId>}
   * @public
   */
  run(isAutoRefreshCall = false) {
    return this._send(isAutoRefreshCall);
  }

  /**
   * Do not call this method directly. Always call run method.
   * @param isAutoRefreshCall {boolean}
   * @returns {Promise}
   * @private
   */
  _send(isAutoRefreshCall = false) {
    this._lastRequestSentTime = new Date().getTime();
    let data = this._createPayload();
    return new Promise((onSuccess, onFailure) => {
      let payload = new HttpOperationPayload(data, onSuccess, onFailure);
      this.__previousPayload = payload;
      if (this._authenticator) {
        let canSend = this._authenticator.canSend(this, payload);
        this._authenticator.modifyRequest(this, payload.data, isAutoRefreshCall);
        if (canSend) {
          this.__coreSend(payload, isAutoRefreshCall);
        }
      }
    });
  }

  executePreviousPayload() {
    this.__coreSend(this.__previousPayload);
  }

  /**
   *
   * @param payload{HttpOperationPayload}
   * @param isAutoRefreshCall {boolean}
   * @private
   */
  __coreSend(payload, isAutoRefreshCall = false) {
    if (this._authenticator) {
      //let canSend = this._authenticator.canSend(this, payload);
      this._authenticator.modifyRequest(this, payload.data, isAutoRefreshCall);
      // if (canSend) {
      //  this.__coreSend(payload);
      //  }
    }

    const jettyCPCookie = Authenticator.AUTH_DATA.jettyCPCookie;
    let url = (localStorage.EVZOOMServerURLOverride || 'http://127.0.0.1:7770') + '/webmin/zoomwebclient-remoting';
    if (jettyCPCookie && ZoomUtil.isSketchAppPlugin()) {
      url = url + ';CLIENTPROXYSESSIONID=' + jettyCPCookie;
    }

    HttpOperation.CURRENT_REQUEST_ID = $.ajax({
      contentType: HttpOperation.REQUEST_CONTENT_TYPE,
      data: payload.data,
      dataType: 'json',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      method: HttpOperation.POST,
      url: url,
      beforeSend: (request) => {
        /*let authorizeToken = PingAuthController.NONE_AUTH_HEADER;
        if (!isAutoRefreshCall && PingAuthController.isPingTypeAuthentication() && Authenticator.isLoginQuery(this)) {
          authorizeToken = PingAuthController.PING_AUTH_HEADER;
        }
        else if(!isAutoRefreshCall && !PingAuthController.isPingTypeAuthentication() && Authenticator.isLoginQuery(this)){
          authorizeToken = PingAuthController.BASIC_AUTH_HEADER;
        }
        request.setRequestHeader("Zm-Authorization", authorizeToken);*/
      },
      xhr: function () {
        let xhr = new window.XMLHttpRequest();
        // WKWebView (used by Sketch) has a default timeout of 60 seconds, and 
        // setting timeout to 0 does not help either (also makes it 60 seconds),
        // so we need to pick a specific large value here.
        xhr.timeout = 60 * 60 * 1000;  // 1 hour ought to be enough for anybody (c)
        return xhr;
      }
    }).done((data, textStatus, jqXHR) => {
      this._ajaxDone(data, textStatus, jqXHR, payload.onSuccess, payload.onFailure);
    }).fail((jqXHR, textStatus, errorThrown) => {
      this._ajaxFail(jqXHR, textStatus, errorThrown, payload.onFailure);
    }).always(() => {
      this._lastRequestDuration = new Date().getTime() - this._lastRequestSentTime;
      if (HttpOperation.DEBUG_ENABLED) {
        console.log("Query: ", this.name, 'Time:', this._lastRequestDuration);
      }
      if (isAutoRefreshCall) {
        HttpOperation.IS_AUTOREFRESH_REQUEST_RUNNING = false;
      }
    });
    if (isAutoRefreshCall) {
      HttpOperation.IS_AUTOREFRESH_REQUEST_RUNNING = true;
      HttpOperation.AUTOREFRESH_REQUEST_ID = HttpOperation.CURRENT_REQUEST_ID;
    }
  }

  /**
   * Creates map of key values pairs which will be send using query params.
   * @returns {*}
   * @private
   */
  _createPayload() {
    let json = this.serializeJson();
    let jsonStringMessage = JSON.stringify(json);
    let data = {};
    data['queryName'] = this.name;
    data['json_operation'] = jsonStringMessage;
    data['application'] = PluginAPI.getApplicationName();
    data['hostApp'] = PluginAPI.getHostApp();
    data['debug'] = false;
    return data;
  }

  /**
   *
   * @param data{Object}
   * @param textStatus{string}
   * @param jqXHR
   * @param onSuccess{Function}
   * @param onFailure{Function}
   * @private
   */
  _ajaxDone(data, textStatus, jqXHR, onSuccess, onFailure) {
    if (this.isAuthFailure(status, data, textStatus, jqXHR)) {
      if (!this._checkAuthFailures) {
        onFailure(new ErrorId(-1, "Error: " + textStatus));
        return;
      }
    }
    const authFailure = this.handleAuthFailure(jqXHR.status, data, textStatus, jqXHR, onFailure);
    if (authFailure) {
      return;
    }
    /**
     * @type {number}
     */
    let status = jqXHR.status;

    let error = false;
    if (status === 200) {
      if (SerializationUtil.isNotSuccess(data)) {
        error = true;
        let errorId = SerializationUtil.createErrorIdIfPresent(data);
        if (HttpOperation.DEBUG_ENABLED) {
          console.log('Error occurred for query: ', this.name, ' Error String: ', errorId.errorDetails);
        }
        if (onFailure) {
          onFailure(errorId);
        }
      }
    }

    if (HttpOperation.DEBUG_ENABLED) {
      console.log('Response received: for query: ', this.name, data, textStatus);
    }
    if (!error) {
      this.deserializeJson(data);
      if (onSuccess) {
        onSuccess(this._response);
      }
    }
  }

  //noinspection JSUnusedLocalSymbols
  /**
   * @param jqXHR
   *
   * @param textStatus{string}
   * @param errorThrown{string}
   * @param onFailure{Function}
   * @private
   */
  _ajaxFail(jqXHR, textStatus, errorThrown, onFailure) {
    if (this.isAuthFailure(status, null, textStatus, jqXHR)) {
      if (!this._checkAuthFailures) {
        onFailure(new ErrorId(-1,MessageUtil.getMsgText("NETWORK_CONNECTION_ERROR") + errorThrown));
        return;
      }
    }
    const authFailure = this.handleAuthFailure(jqXHR.status, errorThrown, textStatus, jqXHR, onFailure);
    if(jqXHR.status === 0 && textStatus === "abort"){
      //Case of aborting ajax request or query request.
      onFailure(new ErrorId(-2, MessageUtil.getMsgText("NETWORK_CONNECTION_ERROR")  + errorThrown));
    }
    else if (!authFailure) {
      onFailure(new ErrorId(-1, MessageUtil.getMsgText("NETWORK_CONNECTION_ERROR")  + errorThrown));
    } else {
      //onFailure(new ErrorId(Authenticator.ABORT_AUTHZ_ERROR, "Auth Error"));
    }
  }

  /**
   *
   * @param status{number}
   * @param data{*}
   * @param textStatus{string}
   * @param jqXHR{*}
   * @param onFailure{Function}
   * @return {boolean}
   * @private
   */
  handleAuthFailure(status, data, textStatus, jqXHR, onFailure) {
    let authFailure = false;
    if (this._authenticator) {
      authFailure = this.isAuthFailure(status, data, textStatus, jqXHR);
      if (authFailure) {
        if (PingAuthController.checkPingTypeAuthentication(jqXHR)) {
          PingAuthController.setUpPingAuthentication();
        }
        else {
          PingAuthController.setUpBasicAuthentication();
        }

        /**
         * @type {ErrorId}
         */
        let errorId = this._authenticator.onAuthFailure(this, status, data);
        if (Authenticator.isLoginQuery(this)) {
          onFailure(errorId);
        }
      }
    }
    return authFailure;
  }

  //noinspection JSUnusedLocalSymbols
  /**
   * @param status
   * @param data
   * @param textStatus
   * @param jqXHR
   * @private
   * @return {boolean}
   */
  isAuthFailure(status, data, textStatus, jqXHR) {
    if (status === 200) {
      if (data && data.hasOwnProperty('authSuccess')) {
        let authSuccess = data['authSuccess'];
        if (!authSuccess) {
          return true;
        }
      }
    } else if (status >= 400 && status <= 410) {
      return true;
    }
    return false;
  }

  /**
   * json{Object}
   */
  serializeJson() {
    throw new Error(MessageUtil.getMsgText("METHOD_CANNOT_BE_CALLED") );
  }

  /**
   * @param json
   */
  deserializeJson(json) {
    throw new Error(MessageUtil.getMsgText("METHOD_CANNOT_BE_CALLED"));
  }

  /**
   *
   */
  static abortCurrentRequestCall() {
    if (HttpOperation.CURRENT_REQUEST_ID)
      HttpOperation.CURRENT_REQUEST_ID.abort();
  }

  /**
   *
   * @returns {boolean}
   */
  static isAutoRefreshCallInProgress() {
    return HttpOperation.IS_AUTOREFRESH_REQUEST_RUNNING;
  }

  /**
   *
   */
  static abortLastAutoRefreshCall() {
    if (HttpOperation.AUTOREFRESH_REQUEST_ID)
      HttpOperation.AUTOREFRESH_REQUEST_ID.abort();
  }
}

/**
 * @type {string}
 * @const
 */
HttpOperation.POST = 'POST';
/**
 *
 * @type {string}
 * @const
 */
HttpOperation.REQUEST_CONTENT_TYPE = 'application/x-www-form-urlencoded; charset=UTF-8';
/**
 *
 * @type {boolean}
 * @const
 */
HttpOperation.DEBUG_ENABLED = false;
HttpOperation.__REQUESTID = 0;

/**
 *
 * @type {boolean}
 */
HttpOperation.IS_AUTOREFRESH_REQUEST_RUNNING = false;
/**
 *
 * @type {number}
 */
HttpOperation.AUTOREFRESH_REQUEST_ID = null;

/**
 *
 * @type {number}
 * @private
 */
HttpOperation.CURRENT_REQUEST_ID = null;

