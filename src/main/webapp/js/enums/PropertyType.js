//@flow
import Enumeration from '../data-structures/Enumeration';

/**
 *
 */
export default class PropertyType {

  /**
   * @private
   * @type {Enumeration}
   */
  static ENUM_OBJ = new Enumeration({
    FLAT: "Flat",
    HOME: "Home"
  });

  /**
   *
   * @param key
   * @returns {*}
   */
  static has(key) {
    return PropertyType.ENUM_OBJ.has(key);
  }

  /**
   *
   * @returns {*}
   */
  static toArray() {
    return PropertyType.ENUM_OBJ.toArray();
  }

  /**
   *
   * @param value
   * @returns {*}
   */
  static toEnum(value) {
    return PropertyType.ENUM_OBJ.toEnum(value);
  }
}