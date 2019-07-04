//@flow
import Enumeration from '../data-structures/Enumeration';

/**
 *
 */
export default class PropertySaleType {

  /**
   * @private
   * @type {Enumeration}
   */
  static ENUM_OBJ = new Enumeration({
    ON_SALE: "On Sale",
    ON_RENT: "On Rent"
  });

  /**
   *
   * @param key
   * @returns {*}
   */
  static has(key) {
    return PropertySaleType.ENUM_OBJ.has(key);
  }

  /**
   *
   * @returns {*}
   */
  static toArray() {
    return PropertySaleType.ENUM_OBJ.toArray();
  }

  /**
   *
   * @param value
   * @returns {*}
   */
  static toEnum(value) {
    return PropertySaleType.ENUM_OBJ.toEnum(value);
  }
}