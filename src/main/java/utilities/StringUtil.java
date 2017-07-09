package utilities;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class StringUtil {

  static boolean isEmpty(String str) {
    return org.eclipse.jetty.util.StringUtil.isBlank(str);
  }

  static boolean isNotEmpty(String str) {
    return org.eclipse.jetty.util.StringUtil.isNotBlank(str);
  }

  static boolean tryParseInt(String str) {
    return parseInt(str, -1) != -1;
  }

  static int parseInt(String str, int defaultValue){
    return isEmpty(str)? defaultValue: Integer.parseInt(str);
  }

  static boolean parseBool(String str, boolean defaultValue){
    return isEmpty(str)? defaultValue: Boolean.parseBoolean(str);
  }

}
