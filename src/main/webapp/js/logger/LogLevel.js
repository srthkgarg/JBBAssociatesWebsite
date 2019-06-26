/**
 * Created by Sarthak on 8/2/2018.
 */
export default class LogLevel {

  constructor(priority, name) {
    this.priority = priority;
    this.name = name;
  }

  /**
   *
   * @param level{LogLevel}
   */
  canLog(level) {
    return this.priority >= level.priority;
  }

  toString() {
    return this.name;
  }
}

/**
 * All Log Levels defined here.
 * @type {LogLevel}
 */
LogLevel.ALL = new LogLevel(0, "ALL");
LogLevel.DEBUG = new LogLevel(30, "DEBUG");
LogLevel.FINEST = new LogLevel(40, "FINEST");
LogLevel.FINE = new LogLevel(50, "FINE");
LogLevel.INFO = new LogLevel(70, "INFO");
LogLevel.WARN = new LogLevel(80, "WARN");
LogLevel.ERROR = new LogLevel(90, "ERROR");
LogLevel.OFF = new LogLevel(100, "OFF");
