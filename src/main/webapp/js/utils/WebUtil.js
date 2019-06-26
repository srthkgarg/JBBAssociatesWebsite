//flow
import Authenticator from '../protocol/Authenticator';
import PluginAPI from 'PluginAPI';

/**
 * Utility class to handle http request's parameters.
 */
export default class WebUtil {

  /**
   *
   * @param url{string}
   * @param object{*} Key and Values inside the objects are appended to url as query params.
   */
  static append(url, object) {
    const addQuestionMark = url.indexOf('?');
    if (addQuestionMark === -1) {
      url = url + "?";
    }
    if (url.charAt(url.length - 1) !== '&') {
      url = url + '&';
    }

    if (object)
      _.forEach(object, function (value, key) {
        url = url + key + '=' + encodeURIComponent(value) + '&';
      });
    return url;
  }

  /**
   *
   * @param url
   * @returns {*}
   */
  static appendAuthData(url) {
    return WebUtil.append(url, this.getAuthData());
  }

  /**
   * @param url {String}
   * @param username {String}
   * @returns {*}
   */
  static appendUserName(url, username) {
    return WebUtil.append(url, {
      user: username
    });
  }

  /**
   *
   * @param url
   * @returns {*}
   */
  static appendPreviewAuthData(url) {
    return WebUtil.append(url, this.getAuthData());
  }

  static getAuthData() {
    return {
      zm_server: Authenticator.AUTH_DATA.serverUrl,
      zm_repo_id: Authenticator.AUTH_DATA.repoId,
      zm_cookie: Authenticator.AUTH_DATA.cookie,
      zm_username: Authenticator.AUTH_DATA.username,
      zm_app_name: PluginAPI.getFullApplicationName()
    };
  }
}
