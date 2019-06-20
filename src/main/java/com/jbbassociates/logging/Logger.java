package com.jbbassociates.logging;

import org.apache.logging.log4j.LogManager;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class Logger {

  private org.apache.logging.log4j.Logger logger;

  private Logger(String className) {
    this.logger = LogManager.getLogger(className);
  }

  public static Logger getLogger(String className) {
    return new Logger(className);
  }

  public static void initLogging(String logConfFilePath){
    //Todo: setup logging creds if needed.
  }

  public static void initLogging(String logLevel, String logFilePath){
    //Todo: setup logging creds if needed.
  }

  public boolean isDebug() {
    return this.logger.isDebugEnabled();
  }

  public void info(String msg, String ...params) {
    this.logger.info(msg, params);
  }

  public void debug(String msg, String ...params) {
    this.logger.debug(msg, params);
  }

  public void error(String msg, String ...params) {
    this.logger.error(msg, params);
  }

  public void fatal(String msg, String ...params) {
    this.logger.fatal(msg, params);
  }

  public void warn(String msg, String ...params) {
    this.logger.warn(msg, params);
  }

  public void trace(String msg, String ...params) {
    this.logger.trace(msg, params);
  }
}
