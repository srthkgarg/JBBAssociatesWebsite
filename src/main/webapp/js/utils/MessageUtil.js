//flow
import en_US from "../../locale/en_US/messages.properties";
import de_DE from "../../locale/de_DE/messages.properties";
import es_ES from "../../locale/es_ES/messages.properties";
import es_MX from "../../locale/es_MX/messages.properties";
import fr_FR from "../../locale/fr_FR/messages.properties";
import fr_CA from "../../locale/fr_CA/messages.properties";

import StringUtil from '../utils/StringUtil';
import PropertyUtil from '../utils/PropertyUtil';
import Logger from '../logger/Logger';

/**
 *
 */
export default class MessageUtil {

  /**
   * Initializes window.locale with all the messages from the message file.
   */
  static initialize() {
    if (!window.locale) {
      window.locale = {
        _current: null,
        _default: en_US,
        _lang: null
      }
    }

    let locale;
    if (global.EVZOOMConfig) {
      // EVZOOMConfig comes from Sketch and is a locale selected by Cocoa from the list of supported locales.
      // The list of supported locales is in EVZOOMPlugin.m (under “LIST OF LOCALES SUPPORTED BY JS”) and should be kept up to date.
      locale = global.EVZOOMConfig
    } else if (CSInterface.ENABLED) {
      locale = csi.hostEnvironment.appUILocale;
    }
    else {
      locale = "en_US"
    }

    switch(locale){
      case 'de':
      case 'de-DE':
      case 'de_DE':
        window.locale._current = de_DE;
        break;
      case 'es':
      case 'es-ES':
      case 'es_ES':
        window.locale._current = es_ES;
        break;
      case 'es-MX':
      case 'es_MX':
        window.locale._current = es_MX;
        break;
      case 'fr':
      case 'fr-FR':
      case 'fr_FR':
        window.locale._current = fr_FR;
        break;
      case 'fr-CA':
      case 'fr_CA':
        window.locale._current = fr_CA;
        break;
      case 'en':
      case 'en-US':
      case 'en_US':
      default:
        window.locale._current = en_US;
    }
    window.locale._lang = locale;
    window.open()
  }

  /**
   *
   * @param key {String}
   * @param args
   */
  static getMsgText(key, ...args) {
    if(PropertyUtil.checkIfNull(window.locale))
      MessageUtil.initialize();

    if(StringUtil.isNotEmpty(key)) {
      let locale = PropertyUtil.checkIfNotNull(window.locale._current)?  window.locale._current: window.locale._default;
      if (PropertyUtil.checkIfNotNull(window.locale._current) && window.locale._current.hasOwnProperty(key)
        && PropertyUtil.checkIfNotNull(window.locale._current[key])) {
          let msgStr = window.locale._current[key];
          if (PropertyUtil.checkIfNotNull(args) && PropertyUtil.isArrayType(args) && args.length > 0) {
            msgStr = StringUtil.format(msgStr, args);
          }
          return msgStr;
      }
      else if(PropertyUtil.checkIfNotNull(window.locale._default) && window.locale._default.hasOwnProperty(key)
        && PropertyUtil.checkIfNotNull(window.locale._default[key])) {
        let msgStr = window.locale._default[key];
        if (PropertyUtil.checkIfNotNull(args) && PropertyUtil.isArrayType(args) && args.length > 0) {
          msgStr = StringUtil.format(msgStr, args);
        }
        return msgStr;
      }
      else {
        MessageUtil.logger.warn("Localization key " + key + " not found in the mentioned locale file : " + window.locale._lang);
        return "";
      }
    }
    else {
      MessageUtil.logger.warn("Localization has not setup. Please check.");
      return "";
    }
  }

  /**
   *
   * @param errorMsg {String}
   */
  static showError(errorMsg) {
    if (StringUtil.isNotEmpty(errorMsg)) {
      window.gs.error = errorMsg;
      window.render();
    }
  }

  /**
   *
   * @param alertMsg {String}
   */
  static showAlert(alertMsg) {
    if (StringUtil.isNotEmpty(alertMsg)) {
      window.gs.alert = alertMsg;
      window.render();
    }
  }

  /**
   *
   * @param infoMsg {String}
   * @param infoHeader {String}
   */
  static showInfoMsg(infoMsg, infoHeader) {
    if (StringUtil.isNotEmpty(infoMsg)) {
      if (StringUtil.isEmpty(infoHeader))
        infoHeader = StringUtil.toCamelCase(MessageUtil.INFO_MSG_TYPE);
      window.gs.message = infoMsg;
      window.gs.messageHeaderText = infoHeader;
      window.render();
    }
  }
}

/**
 *
 * @type {Logger}
 */
MessageUtil.logger = new Logger("MessageUtil");

/**
 *
 * @type {string}
 */
MessageUtil.ERROR_MSG_TYPE = "ERROR";
MessageUtil.ALERT_MSG_TYPE = "ALERT";
MessageUtil.INFO_MSG_TYPE = "INFO";
