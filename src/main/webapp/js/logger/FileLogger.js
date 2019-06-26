import _ from 'lodash';
import TaskScheduler from '../protocol/TaskScheduler';

import StringUtil from '../utils/StringUtil';
import PropertyUtil from '../utils/PropertyUtil';
import PluginAPI from 'PluginAPI';
import ConsoleLogger from './ConsoleLogger';

import WorkerResponse from '../worker/WorkerResponse';
import WorkerController from '../worker/WorkerController';

/**
 * Created by Sarthak on 8/2/2018.
 */
export default class FileLogger {

  /**
   *
   * @param logPerMsg
   */
  constructor(logPerMsg = true) {
    /**
     *
     * @type {boolean}
     */
    this.logPerMsg = logPerMsg;

    /**
     *
     * @type {Array}
     */
    this.logMsgs = [];

    /**
     *
     * @type {LogScheduler}
     */
    this.logScheduler = new LogScheduler(this.waitFunction, this.printLogMsgsOnConsole);

    /**
     *
     * @type {ConsoleLogger}
     */
    this.consoleLogger = new ConsoleLogger();

    if (!this.logPerMsg) {
      this.setUpEventListeners();
    }
  }

  /**
   *
   */
  setUpEventListeners() {
    //Todo: If we want a provision for logging of an array of Msgs instead of doing one each time.
    // and call printAllMsgsAtOnce() function.
    document.addEventListener('customLoggingEvent', (event) => {
      if (event.detail.start) {

      }
      else {

      }
    });
  }

  printLogMsg(logMsg, callbackFunc) {
    this.printAllMsgsAtOnce(callbackFunc, [logMsg]);
  }

  printLogMsgs() {
    if (this.logScheduler.addLogMsgs(this.logMsgs)) {
      if (this.logScheduler.canStart())
        this.logScheduler.start();
      else {
        this.printLogMsgsOnConsole(this.logMsgs);
      }
      this.logMsgs = [];
    }
    else {
      //wait for the call back to send next request.
    }
  }

  printAllMsgsAtOnce(callbackFunc, logMsgsArr = this.logMsgsQueue) {
    this.printMsgsUsingMainThread(callbackFunc, logMsgsArr);
  }

  printMsgsUsingMainThread(callbackFunc, logMsgsArr) {
    PluginAPI.loggingMsgs(logMsgsArr.join(FileLogger.LOG_MSGS_DELIMITER)).then(
      logResp => {
        if (callbackFunc && PropertyUtil.isFunctionType(callbackFunc))
          callbackFunc(logResp, logMsgsArr);
      },
      logError => {
        if (callbackFunc && PropertyUtil.isFunctionType(callbackFunc))
          callbackFunc(logError, logMsgsArr);
      }
    );
  }

  printMsgsUsingWorkerThread(callbackFunc, logMsgsArr) {
    WorkerController.executeLogMsgs(logMsgsArr,
      /**
       * @type {WorkerResponse}
       */
      logResp => {
        if (callbackFunc && PropertyUtil.isFunctionType(callbackFunc))
          callbackFunc(logResp, logMsgsArr);
      }
    );
  }

  /**
   *
   * @param args
   */
  info(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   *
   * @param args
   */
  debug(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   *
   * @param args
   */
  fine(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   *
   * @param args
   */
  finest(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   *
   * @param args
   */
  warn(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   * \
   * @param args
   */
  error(...args) {
    let logMsg = args.join("");
    if (StringUtil.isNotEmpty(logMsg)) {
      this.logMsgs.push(logMsg);
      if (this.logPerMsg) {
        this.printLogMsgs();
      }
    }
  }

  /**
   *
   * @param logResp
   * @param logMsgs
   */
  callbackFunction = (logResp, logMsgs) => {
    if (PropertyUtil.checkIfNotNull(logResp) && !logResp.isSuccess) {
      this.printLogMsgsOnConsole(logMsgs);
    }
  };

  printLogMsgsOnConsole = (logMsgs) => {
    //console.log(logMsgs);
    _.each(logMsgs, logMsg => {
      if (StringUtil.isNotEmpty(logMsg) && StringUtil.isNotEmpty(logMsg.trim()) && PropertyUtil.checkIfNotNull(this.consoleLogger)) {
        //console.log(logMsg);
        this.consoleLogger.info(logMsg);
      }
    });
  };

  waitFunction = () => {
    if (this.logMsgs && this.logMsgs.length > 0)
      this.printLogMsgs();
  };

  /**
   *
   * @param {*} obj
   * @private
   */
  getClass(obj) {
    if (typeof obj === "undefined")
      return "undefined";
    if (obj === null)
      return "null";
    if (obj.constructor) {
      return obj.constructor.name;
    }
    return Object.prototype.toString.call(obj)
      .match(/^\[object\s(.*)\]$/)[1];
  }
}

FileLogger.LOG_MSGS_DELIMITER = ";|::|;";


class LogScheduler extends TaskScheduler {

  /**
   *
   * @param waitFunction {Function}
   * @param failureFunc {Function}
   */
  constructor(waitFunction, failureFunc) {
    super(null, null, 1);
    /**
     *
     * @type {Array.<String>}
     */
    this.logMsgs = [];

    /**
     *
     * @type {Function}
     */
    this.waitFunction = waitFunction;

    /**
     *
     * @type {Function}
     */
    this.failureFunc = failureFunc;

    /**
     *
     * @type {Function}
     */
    this.task = this.getTask;

    /**
     *
     * @type {Function}
     */
    this.callbackFunc = this.getCallbackFunc;
  }

  /**
   *
   * @returns {Function}
   */
  getTask = () => {
    PluginAPI.loggingMsgs(this.logMsgs.join(FileLogger.LOG_MSGS_DELIMITER)).then(
      successResp => {
        if (this.callbackFunc && PropertyUtil.isFunctionType(this.callbackFunc))
          this.callbackFunc(successResp);
      },
      failureResp => {
        if (this.callbackFunc && PropertyUtil.isFunctionType(this.callbackFunc))
          this.callbackFunc(failureResp);
      }
    );
  };

  printMsgsUsingMainThread() {
    PluginAPI.loggingMsgs(this.logMsgs.join(FileLogger.LOG_MSGS_DELIMITER)).then(
      logResp => {
        if (this.callbackFunc && PropertyUtil.isFunctionType(this.callbackFunc))
          this.callbackFunc(logResp);
      },
      logError => {
        if (this.callbackFunc && PropertyUtil.isFunctionType(this.callbackFunc))
          this.callbackFunc(logError);
      }
    );
  }

  printMsgsUsingWorkerThread(callbackFunc, logMsgsArr) {
    WorkerController.executeLogMsgs(logMsgsArr,
      /**
       * @type {WorkerResponse}
       */
      logResp => {
        if (callbackFunc && PropertyUtil.isFunctionType(callbackFunc))
          callbackFunc(logResp, logMsgsArr);
      }
    );
  }

  /**
   *
   * @param logResp
   */
  getCallbackFunc(logResp) {
    if (PropertyUtil.checkIfNotNull(logResp) && logResp.isSuccess) {
      this.clearLogMsgs();
      if (this.waitFunction && typeof this.waitFunction === "function")
        this.waitFunction();
    }
    else {
      if (this.failureFunc && typeof this.failureFunc === "function")
        this.failureFunc(this.logMsgs);
      this.clearLogMsgs();
      if (this.waitFunction && typeof this.waitFunction === "function")
        this.waitFunction();
    }
  };

  /**
   *
   * @returns {Array|Array.<String>}
   */
  getLogMsgs() {
    return this.logMsgs;
  }

  /**
   *
   * @param logMsgsArr
   * @returns {*}
   */
  setLogMsgs = (logMsgsArr) => {
    if (this.isStarted()) {
      if (this.canCancel())
        this.cancel();
      else
        return false;
    }

    this.logMsgs = [];
    return this.cloneAndAddLogMsg(logMsgsArr);
  };

  /**
   *
   * @param logMsgsArr
   * @returns {*}
   */
  addLogMsgs = (logMsgsArr) => {
    if (this.isStarted()) {
      if (this.canCancel())
        this.cancel();
      else
        return false;
    }

    if (!this.logMsgs || this.logMsgs.length <= 0)
      this.logMsgs = [];
    return this.cloneAndAddLogMsg(logMsgsArr);
  };

  /**
   *
   * @param logMsg
   * @returns {*}
   */
  addLogMsg(logMsg) {
    return this.addLogMsgs([logMsg]);
  }

  /**
   *
   * @param logMsgArr
   * @returns {boolean}
   */
  cloneAndAddLogMsg = (logMsgArr) => {
    let isNotEmpty = PropertyUtil.checkIfNotNull(logMsgArr) && logMsgArr.length > 0;
    if (isNotEmpty) {
      let isEmptyArray = true;
      _.each(logMsgArr, logMsg => {
        if (StringUtil.isNotEmpty(logMsg) && StringUtil.isNotEmpty(logMsg.trim())) {
          this.logMsgs.push(logMsg);
          isEmptyArray = false;
        }
      });
      isNotEmpty = isNotEmpty && !isEmptyArray;
    }
    return isNotEmpty;
  };

  /**
   *
   * @returns {boolean}
   */
  clearLogMsgs() {
    if (this.logMsgs && this.logMsgs.length > 0)
      this.logMsgs = [];
    return true;
  }
}
