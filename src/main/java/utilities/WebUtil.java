package utilities;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class WebUtil {

  public static String getParam(HttpServletRequest request, String paramKey){
    return (request != null && request.getParameterMap().size() >= 0 && StringUtil.isNotEmpty(paramKey))?
      request.getParameter(paramKey) : null;
  }

  public static String getParam(HttpServletRequest request, String paramKey, String defaultValue){
    String value = getParam(request, paramKey);
    if(StringUtil.isEmpty(value))
      value = defaultValue;
    return value;
  }

  public static int getParam(HttpServletRequest request, String paramKey, int defaultValue){
    String value = getParam(request, paramKey);
    return StringUtil.tryParseInt(value)? StringUtil.parseInt(value, defaultValue): defaultValue;
  }

  public static boolean getParam(HttpServletRequest request, String paramKey, boolean defaultValue){
    String value = getParam(request, paramKey);
    return StringUtil.parseBool(value, defaultValue);
  }

}
