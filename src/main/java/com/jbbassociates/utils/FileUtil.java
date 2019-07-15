package com.jbbassociates.utils;

import java.io.File;

/**
 * FileUtil is a class used to all types of methods used for file manipulation.
 */
public class FileUtil {

  /**
   * @param filePath {String}
   * @return {boolean}
   */
  static boolean isExists(String filePath) {
    return PathUtil.isValidPath(filePath) && FileUtil.isExists(new File(filePath));
  }

  /**
   * @param file {File}
   * @return {boolean}
   */
  static boolean isExists(File file) {
    return file.exists();
  }

}