package com.jbbassociates;

import com.jbbassociates.logging.Logger;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.webapp.WebAppContext;

import java.util.Date;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class StartUp {

  private static StartUp _instance;
  private static Logger logger = Logger.getLogger(StartUp.class.getName());

  public static void main(String[] args) throws Exception {
    if (_instance == null)
      _instance = new StartUp();
  }

  private StartUp() {
    try {
      this.setUpServer();
      this.initLogging();
      this.setUpApplicationDB();
      this.printStartMsg();
    } catch (Exception e) {
      logger.fatal(e.getLocalizedMessage());
    }
  }

  private void setUpServer() throws Exception {
    Server server = new Server(Constants.SERVER_PORT);

    HandlerList handlers = new HandlerList();
    handlers.setHandlers(new Handler[]{getWebAppContext(), new DefaultHandler()});
    server.setHandler(handlers);

    server.start();
    server.join();
  }

  private static WebAppContext getWebAppContext() {
    WebAppContext webAppContext = new WebAppContext();
    webAppContext.setDescriptor(webAppContext + "/WEB-INF/web.xml");
    webAppContext.setResourceBase("./src/main/webapp");
    webAppContext.setContextPath("/jbb-associates");
    webAppContext.setWelcomeFiles(new String[]{"./html/index.html"});
    return webAppContext;
  }

  private void setUpApplicationDB() {

  }

  private void initLogging() {
    try {
      //Todo: specify the configuration file for logs
      String logConfFilePath = "./";
      Logger.initLogging(logConfFilePath);
    } catch (Exception ex) {

    }
  }

  private void printStartMsg() {
    logger.info("*****************************************************");
    logger.info("*" + String.format("%52s", "*"));
    logger.info("*" + String.format("%-10s", " ") + String.format("%-41s", "JBB Associates WebApp Started") + "*");
    logger.info("*" + String.format("%-6s", " ") + String.format("%-45s", "Start Time : " + new Date().toString()) + "*");
    logger.info("*" + String.format("%52s", "*"));
    logger.info("*****************************************************");
  }
}
