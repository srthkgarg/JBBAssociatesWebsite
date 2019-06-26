//flow
import PropertyUtil from '../utils/PropertyUtil';

/**
 *
 */
export default class ArrayUtil {

  /**
   *
   */
  static addPrototypeFunctions() {
    Array.prototype.toString = function () {
      return ArrayUtil.toString(this);
    };
  }

  static isNotEmpty(arr) {
    return !ArrayUtil.isEmpty(arr);
  }

  static isEmpty(arr) {
    return (PropertyUtil.checkIfNull(arr) || !PropertyUtil.isArrayType(arr) || arr.length <= 0);
  }

  static toString(arr, delimiter = ArrayUtil.DEFAULT_DELIMITER) {
    return arr.join(delimiter);
  }

  static toJsonString(arr) {
    return PropertyUtil.isNotEmpty(arr) ? JSON.stringify(arr) : "[]";
  }

  static splitArrayIntoPages(myArray, pageSize){
    let arrayLength = myArray.length;
    let pages = [];

    for (let index = 0; index < arrayLength; index += pageSize) {
      let page = myArray.slice(index, index+pageSize);
      pages.push(page);
    }

    return pages;
  }

}

ArrayUtil.DEFAULT_DELIMITER = ",";