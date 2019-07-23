package com.jbbassociates.utils;

import java.io.File;

/**
 *
 */
public class PathUtil {

  /**
   *
   * @param filePath {String}
   * @return {String}
   */
  public static String normalizePath(String filePath) {
    if (StringUtil.isNotNullOrEmpty(filePath, true)) {
      //Todo: replace '\\' to '/'
      filePath.replaceAll("\\\\", "/");
    }
    return filePath;
  }

  /**
   *
   * @param filePath {String}
   * @return {boolean}
   */
  public static boolean isValidFilePath(String filePath) {
    return PathUtil.isValidPath(filePath) && FileUtil.isExists(new File(filePath));
  }

  /**
   *
   * @param path {String}
   * @return {boolean}
   */
  public static boolean isValidPath(String path) {
    //Todo: check for path regex.
    //&& filePath.matches("")
    return StringUtil.isNotNullOrEmpty(path, true);
  }

}