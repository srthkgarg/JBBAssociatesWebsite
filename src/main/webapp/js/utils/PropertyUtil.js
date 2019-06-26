//flow
import StringUtil from "./StringUtil";

/**
 *
 */
export default class PropertyUtil {

  static addPrototypeFunctions() {
    Object.prototype.toString = function () {
      return PropertyUtil.toString(this);
    };
  }

  /**
   *
   * @param value {*}
   * @param defaultValue {number}
   */
  static toInt(value, defaultValue = null){
    if (PropertyUtil.checkIfNotNull(value)) {
      if (PropertyUtil.isStringType(value))
        return StringUtil.toInt(value);
      else if(PropertyUtil.isNumberType(value))
        return value;
      else
        return defaultValue;
    }
    return defaultValue;
  }

  /**
   *
   * @param value {*}
   * @param defaultValue {boolean}
   * @returns {boolean}
   */
  static toBool(value, defaultValue = false) {
    if (PropertyUtil.checkIfNotNull(value)) {
      if (PropertyUtil.isStringType(value))
        return StringUtil.toBool(value);
      else if(PropertyUtil.isBooleanType(value))
        return value === true;
      else if(PropertyUtil.isNumberType(value))
        return value === 1;
      else
        return defaultValue;
    }
    return defaultValue;
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static checkIfNull(value) {
    return value === null || value === undefined;
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static checkIfNotNull(value) {
    return !PropertyUtil.checkIfNull((value));
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isNumberType(value) {
    return PropertyUtil.checkIfNotNull((value)) && typeof value === "number";
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isStringType(value) {
    return PropertyUtil.checkIfNotNull((value)) && typeof value === "string";
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isBooleanType(value) {
    return PropertyUtil.checkIfNotNull((value)) && typeof value === "boolean";
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isArrayType(value) {
    return PropertyUtil.checkIfNotNull((value)) && (value.constructor === Array || value instanceof Array);
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isObjectType(value) {
    return PropertyUtil.checkIfNotNull((value)) && typeof value === "object";
  }

  /**
   *
   * @param value {*}
   * @returns {boolean}
   */
  static isFunctionType(value) {
    return PropertyUtil.checkIfNotNull((value)) && typeof value === "function";
  }

  static toString(obj) {
    return PropertyUtil.toJsonString(obj);
  }

  static toJsonString(obj) {
    return (PropertyUtil.checkIfNotNull(obj) && PropertyUtil.isObjectType(obj)) ? JSON.stringify(obj) : "{}";
  }
}