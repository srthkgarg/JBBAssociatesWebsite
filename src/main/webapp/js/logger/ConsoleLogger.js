/**
 * Created by Sarthak on 8/2/2018.
 */
export default class ConsoleLogger {

  constructor() {
  }

  info(...args) {
    console.info.apply(console, args);
  }

  debug(...args) {
    console.debug.apply(console, args);
  }

  fine(...args) {
    console.log.apply(console, args);
  }

  finest(...args) {
    console.log.apply(console, args);
  }

  warn(...args) {
    console.warn.apply(console, args);
  }

  error(...args) {
    console.error.apply(console, args);
  }

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