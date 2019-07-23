package com.jbbassociates.utils;

/**
 * StringUtil class contains the methods used in String manipulation to be used all over the project.
 */
public class PropertyUtil {

  /**
   * @param obj {Object}
   * @return {boolean}
   */
  public static boolean isNull(Object obj) {
    return obj == null;
  }

  /**
   * @param obj {Object}
   * @return {boolean}
   */
  public static boolean isNotNull(Object obj) {
    return PropertyUtil.isNotNull(obj);
  }

}