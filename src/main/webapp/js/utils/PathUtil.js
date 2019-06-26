//@flow
import StringUtil from "./StringUtil";

/**
 * Utility class to contain static functionalities related to string based paths for files or directories.
 */
export default class PathUtil {

  /**
   *
   * @param path {String}
   */
  static normalizePath(path) {
    if (StringUtil.isNotEmpty(path)) {
      //Todo: check for path regex.
    }
    else {
      return null;
    }
  }

  /**
   * To escape all specicl characters related to a file path by backslash.
   * @param path
   * @returns {*}
   */
  static escapeFilePath(path) {
    if (StringUtil.isNotEmpty(path)) {
      if(path.indexOf('\\') > -1)
        path.replace('\\', '\\\\');
      return path;
    }
    else {
      return null;
    }
  }
}