package com.jbbassociates;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.*;
import org.eclipse.jetty.webapp.WebAppContext;
import org.glassfish.jersey.servlet.ServletContainer;

import javax.servlet.DispatcherType;
import java.util.EnumSet;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class AppStartUp {

  private static AppStartUp _instance;

  public static void main(String[] args) throws Exception {
    if(_instance == null)
      _instance = new AppStartUp();
  }

  private AppStartUp() {
    try {
      this.setUpServer();
    }
    catch (Exception e) {
      //Todo: log this error message.
      System.out.println(e.toString());
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

  private static  WebAppContext getWebAppContext() {
    WebAppContext webAppContext = new WebAppContext();
    webAppContext.setDescriptor(webAppContext + "/WEB-INF/web.xml");
    webAppContext.setResourceBase("./src/main/webapp");
    webAppContext.setContextPath("/home");
    webAppContext.setWelcomeFiles(new String[]{"./html/index.html"});
    return webAppContext;
  }

  private static  void setUpApplicationDB() {
    //Todo: Implement DB setup here.
  }

  private static void initLogging() {
    //Todo: implement logging for application.
  }
}
