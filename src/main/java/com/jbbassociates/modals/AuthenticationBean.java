package com.jbbassociates.modals;


import org.springframework.http.HttpStatus;

/**
 *
 */
public class AuthenticationBean {

  /**
   *
   */
  private String authType;

  /**
   *
   */
  private HttpStatus httpCode;

  /**
   *
   */
  private boolean success;

  /**
   *
   */
  private String message;

  /**
   * @param httpCode
   */
  public AuthenticationBean(HttpStatus httpCode) {
    this.httpCode = httpCode;
  }

  /**
   * @return
   */
  public String getMessage() {
    return message;
  }

  /**
   *
   * @return
   */
  public String getAuthType() {
    return authType;
  }

  /**
   *
   * @param authType
   */
  public void setAuthType(String authType) {
    this.authType = authType;
  }

  /**
   *
   * @return
   */
  public HttpStatus getHttpCode() {
    return httpCode;
  }

  /**
   *
   * @param httpCode
   */
  public void setHttpCode(HttpStatus httpCode) {
    this.httpCode = httpCode;
  }

  /**
   *
   * @return
   */
  public boolean isSuccess() {
    return success;
  }

  /**
   *
   * @param success
   */
  public void setSuccess(boolean success) {
    this.success = success;
  }

  /**
   * @param message
   */
  public void setMessage(String message) {
    this.message = message;
  }

  /**
   *
   * @return
   */
  @Override
  public String toString() {
    return String.format("JBB Associates Auth Message : %s", message);
  }

}

