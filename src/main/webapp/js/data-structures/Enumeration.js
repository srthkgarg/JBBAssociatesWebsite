//@flow
/**
 *
 */
export default class Enumeration {

  /**
   *
   * @param obj
   * @returns {Object}
   */
  constructor(obj) {
    for (const key in obj) {
      /**
       * @type {string}
       */
      this[key] = obj[key]
    }
    return Object.freeze(this);
  }

  /**
   *
   * @param key
   * @returns {boolean}
   */
  has(key) {
    return this.hasOwnProperty(key);
  };

  /**
   *
   * @param value
   * @returns {*}
   */
  toEnum(value) {
    let enumObj = null;
    for (const key in this) {
      if (value === this[key]) {
        enumObj = new EnumObj(key, this[key])
      }
    }
    return enumObj;
  };

  /**
   *
   * @returns {Array}
   */
  toArray() {
    let enumArr = [];
    for (const key in this) {
      enumArr.push(new EnumObj(key, this[key]));
    }
    return enumArr;
  };
}

/**
 *
 */
export class EnumObj {
  /**
   *
   * @param key
   * @param value
   * @returns {Object}
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  /**
   *
   * @returns {*|string}
   */
  toString() {
    return this.value.toString();
  }
}