//@flow

import {
  FILE_NAME_DELIMITER
} from '../store/Constants';
import PropertyUtil from './PropertyUtil';
import PluginAPI from 'PluginAPI';

/**
 * Utility class to hold all types of string related functionalities.
 */
export default class StringUtil {

  static addPrototypeFunctions() {
    String.prototype.format = function (...params) {
      return StringUtil.format(this, params)
    };

    String.prototype.getFileExtension = StringUtil.getFileExtension;
  }

  /**
   *
   * @param str {String}
   */
  static toCamelCase(str) {
    if (StringUtil.isNotEmpty(str) && str.length > 0) {
      let strLowerCase = str.toLowerCase();
      let firstChar = strLowerCase[0];
      return StringUtil.joinTwoStrings(firstChar.toUpperCase(), strLowerCase.substr(1));
    }
    else {
      return str;
    }
  }

  static getFileExtension(fileName) {
    if (StringUtil.isNotEmpty(fileName)) {
      let lastIndex = fileName ? fileName.lastIndexOf(FILE_NAME_DELIMITER) : -1;
      return lastIndex >= 0 ? fileName.substr(lastIndex+1, fileName.length - lastIndex) : null;
    }
    else {
      return null;
    }
  };

  static getFileNameWithoutExtension(fileName){
    if (StringUtil.isNotEmpty(fileName)) {
      let lastIndex = fileName ? fileName.lastIndexOf(FILE_NAME_DELIMITER) : -1;
      return lastIndex >= 0 ? fileName.substr(0, lastIndex + 1) : fileName;
    }
    else {
      return fileName;
    }
  }

  /**
   * @param fileName{string}
   * @param extension{string}
   * @return {string}
   */
  static replaceExtension(fileName, extension) {
    const oldExt = StringUtil.getFileExtension(fileName);
    if (oldExt) {
      fileName = fileName.replace(oldExt, extension);
    }
    return fileName;
  }

  /**
   * return true is a valid string.
   * @param str
   * @param checkContentAlso {optional}
   * @returns {boolean}
   */
  static isNotEmpty(str, checkContentAlso = false) {
    return (!StringUtil.isEmpty(str, checkContentAlso));
  }

  /**
   * returns true is not a valid string.
   * @param str
   * @param checkContentAlso {optional}
   * @returns {boolean}
   */
  static isEmpty(str, checkContentAlso = false) {
    return (PropertyUtil.checkIfNull(str) || !PropertyUtil.isStringType(str) || str === "" || (checkContentAlso && str.trim() === ""));
  }

  static format(key, params) {
    return key.replace(StringUtil.FORMAT_REGEX, function (item) {
      var intVal = parseInt(item.substring(1, item.length - 1));
      var replace;
      if (intVal >= 0) {
        replace = params[intVal];
      } else if (intVal === -1) {
        replace = "{";
      } else if (intVal === -2) {
        replace = "}";
      } else {
        replace = "";
      }
      return replace;
    });
  }

  static getFileNameFromPath(filePath) {
    if (StringUtil.isNotEmpty(filePath)) {
      let filename = filePath.replace(/^.*[\\\/]/, '')
      return filename;
    }
    return null;
  }

  static getParentDirFromFilePath(filePath) {
    if (StringUtil.isNotEmpty(filePath)) {
      const nodePath = require('path');
      return nodePath.dirname(filePath);
    }
    return null;
  }

  static stringSortComparator(a, b) {
    let ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
      ax.push([$1 || Infinity, $2 || ""])
    });
    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
      bx.push([$1 || Infinity, $2 || ""])
    });

    while (ax.length && bx.length) {
      let an = ax.shift();
      let bn = bx.shift();
      let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
      if (nn) return nn;
    }

    return ax.length - bx.length;
  }

  /**
   *
   * @param str1
   * @param str2
   * @returns {*}
   */
  static startsWith(str1, str2) {
    if (StringUtil.isNotEmpty(str1) && StringUtil.isNotEmpty(str2))
      return str1.startsWith(str2);
    else
      return false;
  }

  /**
   * returns parsed positive int value for the string
   * @param str {String}
   * @param dafaultVal {number}
   * @returns {number}
   */
  static toPositiveNumber(str, dafaultVal = null) {
    let numVal = StringUtil.toInt(str);
    return (numVal && numVal > 0) ? numVal : dafaultVal;
  }

  /**
   * returns parsed negative int value for the string
   * @param str {String}
   * @param dafaultVal {number}
   * @returns {number}
   */
  static toNegativeNumber(str, dafaultVal = null) {
    let numVal = StringUtil.toInt(str);
    return (numVal && numVal < 0) ? numVal : dafaultVal;
  }

  /**
   * returns parsed non negative int value for the string
   * @param str {String}
   * @param dafaultVal {number}
   * @returns {number}
   */
  static toNonNegativeNumber(str, dafaultVal = null) {
    let numVal = StringUtil.toInt(str);
    return (numVal !== null && numVal >= 0) ? numVal : dafaultVal;
  }

  /**
   * returns parsed int value for the string
   * @param str {String}
   * @param defaultVal {number}
   * @returns {number}
   */
  static toInt(str, defaultVal = null) {
    if (str)
      str = str.trim();

    if (StringUtil.isEmpty(str))
      return defaultVal;

    try {
      let numValue = parseInt(str);
      if (!isNaN(numValue))
        return numValue;
      else
        return defaultVal;
    }
    catch (e) {
      return defaultVal;
    }
  }

  /**
   * returns parsed float value for the string
   * @param str {String}
   * @param defaultVal {number}
   * @returns {*}
   */
  static toFloat(str, defaultVal = null) {
    return StringUtil.toInt(str, defaultVal);
  }

  /**
   *
   * @param str {String}
   * @param defaultVal {boolean}
   * @returns {boolean}
   */
  static toBool(str, defaultVal = false) {
    if (str)
      str = str.trim();

    if (StringUtil.isEmpty(str))
      return defaultVal;

    try {
      let lowerCaseStr = str.toLowerCase();
      return lowerCaseStr === "true" || lowerCaseStr === "yes" || lowerCaseStr === "1";
    }
    catch (e) {
      return defaultVal;
    }
  }

  /**
   *
   * @param str {String}
   * @param regex {RegExp|String}
   * @returns {boolean}
   */
  static matches(str, regex) {
    if (StringUtil.isNotEmpty(str) && PropertyUtil.checkIfNotNull(regex)) {
      if (PropertyUtil.isStringType(regex))
        return (new RegExp(regex).test(str));
      else
        return (regex.test(str));
    }
    else {
      return false;
    }
  }

  /**
   *
   * @param str {String}
   * @param regex {String}
   * @returns {Array.<String>}
   */
  static getGroupsFromRegex(str, regex) {
    let regexParts = [];
    if (StringUtil.matches(str, regex)) {
      let strParts = str.split(regex);
      if (PropertyUtil.checkIfNotNull(strParts)) {
        _.map(strParts, strVal => {
          if (PropertyUtil.checkIfNotNull(strVal)) {
            strVal = strVal.trim();
            if (StringUtil.isNotEmpty(strVal))
              regexParts.push(strVal);
          }
        });
      }
    }

    return regexParts;
  }

  /**
   * compares two string and returns a relative integer.
   * @param str1 {String}
   * @param str2 {String}
   * @returns {number}
   */
  static compare(str1, str2) {
    if (StringUtil.isNotEmpty(str1) && StringUtil.isNotEmpty(str2)) {
      return str1 - str2;
    }
    else {
      return 0;
    }
  }

  /**
   * compares two string without any case-sensitivity and returns a relative integer.
   * @param str1 {String}
   * @param str2 {String}
   * @returns {number}
   */
  static comparei(str1, str2) {
    if (StringUtil.isNotEmpty(str1) && StringUtil.isNotEmpty(str2)) {
      return StringUtil.compare(str1.toLowerCase(), str2.toLowerCase());
    }
    else {
      return 0;
    }
  }

  /**
   * escapes any single or double quote character present in string parameter for extend script.
   * @param str {String}
   * @returns {String}
   */
  static escapeQuotesInStringParameter(str) {
    if (StringUtil.isNotEmpty(str)) {
      if (str.indexOf("\"") >= 0)
        return str.replace(/"/g, "\\\"");
      else if (str.indexOf("\'") >= 0)
        return str.replace(/'/, "\\\'");
    }
    return str;
  }

  /**
   *
   * @param str1 {String}
   * @param str2 {String}
   * @returns {string|null}
   * @param delimiter {String|null|undefined}
   */
  static joinTwoStrings(str1, str2, delimiter = undefined) {
    if (StringUtil.isNotEmpty(str1) && StringUtil.isNotEmpty(str2)) {
      if (PropertyUtil.checkIfNotNull(delimiter))
        return str1 + delimiter + str2;
      else
        return str1 + str2;
    }
    else {
      if (StringUtil.isNotEmpty(str1))
        return str1;
      else if (StringUtil.isNotEmpty(str2))
        return str2;
      else
        return null;
    }
  }

  /**
   *
   * @param strArr {Array.<String>}
   * @param delimiter {String|null|undefined}
   */
  static joinStrArray(strArr, delimiter = undefined) {
    if (PropertyUtil.checkIfNotNull(strArr) && PropertyUtil.isArrayType(strArr)) {
      if (PropertyUtil.checkIfNotNull(delimiter))
        return strArr.join(delimiter);
      else
        return strArr.join("");
    }
    else {
      return null;
    }
  }

  /**
   *
   * @param strArr
   * @returns {*}
   */
  static isCurrentAppProject(filePath) {
    const fileExtension = StringUtil.getFileExtension(filePath);
    return PluginAPI.isCurrentAppProject(fileExtension);
  }

  /**
   *
   * @param strArr
   * @returns {*}
   */
  static joinMultipleStrings(...strArr) {
    return StringUtil.joinStrArray(strArr);
  }
}

/**
 * @type {RegEx}
 * @private
 */
StringUtil.FORMAT_REGEX = new RegExp("{-?[0-9]+}", "g");