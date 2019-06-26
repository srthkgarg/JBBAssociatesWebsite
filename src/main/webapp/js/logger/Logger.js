import PluginAPI from 'PluginAPI';
import LogLevel from './LogLevel';
import ConsoleLogger from './ConsoleLogger';
import FileLogger from './FileLogger';

import PropertyUtil from '../utils/PropertyUtil';

/**
 * Organization: Revzoom India Pvt Ltd.
 * User: om
 * Date: 28/03/17
 * Time: 6:33 PM
 */
export default class Logger {

  /**
   * @param {string} className Name of class, in which this logger is going to be used.<br>
   *                      Class name will be append in the log messages and will be<br>
   *                      used for filtering.
   */
  constructor(className) {
    this.className = className;
  }

  /**
   *
   * @param logLevel {String|LogLevel}
   * @param defaultLogLevel {LogLevel}
   * @return {void}
   */
  static setLoggerLogLevel(logLevel, defaultLogLevel = LogLevel.INFO) {
    if (logLevel instanceof LogLevel)
      Logger.LEVEL = logLevel;
    else if (PropertyUtil.isStringType(logLevel)) {
      let logLevelObj = Logger.getLoggerLogLevel(logLevel);
      Logger.LEVEL = PropertyUtil.checkIfNotNull(logLevelObj)? logLevelObj : LogLevel.INFO;
    }
  }

  /**
   *
   * @param logLevel {string}
   * @return {LogLevel}
   */
  static getLoggerLogLevel(logLevel) {
    switch (logLevel) {
      case "ALL" :
        return LogLevel.ALL;
        break;
      case "DEBUG" :
        return LogLevel.DEBUG;
        break;
      case "INFO" :
        return LogLevel.INFO;
        break;
      case "WARN" :
        return LogLevel.WARN;
        break;
      case "ERROR" :
        return LogLevel.ERROR;
        break;
      case "OFF" :
        return LogLevel.OFF;
      default :
        return null;
    }
  }

  /**
   *
   * @param logLevel {String}
   * @param maxSizePerLogFile {number}
   * @param maxFilesToBeKept {number}
   * @param filters {Array.<>}
   * @param loggerType {String}
   */
  static init(logLevel = Logger.DEFAULT_LOG_LEVEL, maxSizePerLogFile = Logger.DEFAULT_MAX_SIZE_FOR_LOGS_FILE,
              maxFilesToBeKept = Logger.DEFAULT_MAX_LOG_FILES_TO_BE_KEPT, filters = [], loggerType = "FILE_LOGGER") {
    /**
     * @private
     * @type {*}
     */
    Logger.logger = loggerType === "CONSOLE_LOGGER" ? new ConsoleLogger() : new FileLogger();

    /**
     * log level to be set while running
     * @type {LogLevel}
     */
    Logger.setLoggerLogLevel(logLevel);

    /**
     *
     * @type {number}
     */
    Logger.MAX_SIZE_FOR_LOGS_FILE = maxSizePerLogFile;

    /**
     *
     * @type {number}
     */
    Logger.MAX_LOG_FILES_TO_BE_KEPT = maxFilesToBeKept;

    /**
     * Add method or class names, which you want to show in logs.<br>
     * Only added names will be show in logs. No filtering will work, if it is left blank.
     * @type {Array}
     */
    Logger.FILTER = filters;
  }

  /**
   * @params {Array}
   * @private
   *
   */
  addClassName(params) {
    params.splice(0, 0, (new Date().toLocaleString()) + " " + '[' + this.className + '] ');
  }

  /**
   * @params {Array}
   * @private
   *
   */
  addApplicationCode(params) {
    params.splice(0, 0, PluginAPI.getHostApp() + ' ');
  }

  finest(...args) {
    if (LogLevel.FINEST.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'FINEST: ');
        Logger.logger.finest.apply(Logger.logger, args);
      }
    }
  }

  fine(...args) {
    if (LogLevel.FINE.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'FINE: ');
        Logger.logger.fine.apply(Logger.logger, args);
      }
    }
  }

  info(...args) {
    if (LogLevel.INFO.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'INFO: ');
        Logger.logger.info.apply(Logger.logger, args);
      }
    }
  }

  isDebug() {
    return LogLevel.DEBUG.canLog(Logger.LEVEL);
  }

  debug(...args) {
    if (LogLevel.DEBUG.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'DEBUG: ');
        Logger.logger.debug.apply(Logger.logger, args);
      }
    }
  }

  warn(...args) {
    if (LogLevel.WARN.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'WARN: ');
        Logger.logger.warn.apply(Logger.logger, args);
      }
    }
  }

  error(...args) {
    if (LogLevel.ERROR.canLog(Logger.LEVEL)) {
      if (Logger.FILTER.length === 0 || Logger.FILTER.indexOf(this.className) !== -1) {
        this.addClassName(args);
        this.addApplicationCode(args);
        args.splice(0, 0, 'ERROR: ');
        Logger.logger.error.apply(Logger.logger, args);
      }
    }
  }
}

/**
 * default log level.
 */
Logger.DEFAULT_LOG_LEVEL = LogLevel.INFO.toString();

/**
 *
 * @type {number}
 */
Logger.DEFAULT_MAX_SIZE_FOR_LOGS_FILE = 1; //in GigaBytes (GB)

/**
 *
 * @type {number}
 */
Logger.DEFAULT_MAX_LOG_FILES_TO_BE_KEPT = 20;

