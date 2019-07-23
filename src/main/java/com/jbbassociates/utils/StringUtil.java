package com.jbbassociates.utils;

/**
 * StringUtil class contains the methods used in String manipulation to be used all over the project.
 */
public class StringUtil {


  /**
   * @param str {String}
   * @return {boolean}
   */
  public static boolean isNullOrEmpty(String str) {
    return str == null || str.equals("");
  }

  /**
   * @param str          {String}
   * @param checkContent {boolean}
   * @return {boolean}
   */
  public static boolean isNullOrEmpty(String str, boolean checkContent) {
    boolean isEmpty = StringUtil.isNullOrEmpty(str);
    if (!isEmpty && checkContent) {
      isEmpty = StringUtil.isNullOrEmpty(str.trim());
    }
    return isEmpty;
  }

  /**
   * @param str          {String}
   * @return {boolean}
   */
  public static boolean isNotNullOrEmpty(String str) {
    return StringUtil.isNotNullOrEmpty(str, false);
  }

  /**
   * @param str          {String}
   * @param checkContent {boolean}
   * @return {boolean}
   */
  public static boolean isNotNullOrEmpty(String str, boolean checkContent) {
    return !StringUtil.isNullOrEmpty(str, checkContent);
  }

  /**
   *
   * @param str {String}
   * @return {String}
   */
  public static String trim(String str) {
    return StringUtil.isNotNullOrEmpty(str) ? str.trim() : str;
  }

}