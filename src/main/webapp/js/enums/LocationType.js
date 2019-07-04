//@flow
import Enumeration from '../data-structures/Enumeration';

/**
 *
 */
export default class LocationType {

  /**
   * @private
   * @type {Enumeration}
   */
  static ENUM_OBJ = new Enumeration({
    DELHI: "Delhi",
    NOIDA: "Noida",
    GURGAON: "Gurgaon"
  });

  /**
   *
   * @param key
   * @returns {*}
   */
  static has(key) {
    return LocationType.ENUM_OBJ.has(key);
  }

  /**
   *
   * @returns {*}
   */
  static toArray() {
    return LocationType.ENUM_OBJ.toArray();
  }

  /**
   *
   * @param value
   * @returns {*}
   */
  static toEnum(value) {
    return LocationType.ENUM_OBJ.toEnum(value);
  }
}

