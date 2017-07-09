package system;

import org.eclipse.jetty.http.HttpVersion;
import org.eclipse.jetty.server.*;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.servlet.ServletMapping;
import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.eclipse.jetty.util.thread.ExecutorThreadPool;
import org.eclipse.jetty.webapp.WebAppContext;

import javax.servlet.http.HttpServlet;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * Created by Sarthak on 10-06-2017.
 */
public class StartUp {
  private static StartUp startup;

  private StartUp() {
  }

  public static void main(String[] args) throws Exception {
    setUpAll();

    /*Server server = new Server(8080);*/
    /*ServletHandler handler = new ServletHandler();
    server.setHandler(handler);
    final String servletName = "DefaultServlet";
    ServletHolder servlet = new ServletHolder(servletName, Default.class);
    handler.addServlet(servlet);
    ServletMapping servletMapping = new ServletMapping();
    servletMapping.setServletName(servletName);
    servletMapping.setPathSpecs(new String[]{"", "/jsp/index.jsp", "/index.jsp"});
    handler.addServletMapping(servletMapping);*/
    /*ServletContextHandler handler = new ServletContextHandler(server, "/DefaultServlet");
    handler.addServlet(Default.class, "/");
    server.setHandler(handler);
    server.start();*/

    /*WebAppContext ctx = new WebAppContext();
    ctx.setResourceBase("webapp");
    ctx.setContextPath("/webapp/index.jsp");
    ctx.setAttribute("org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern",".*//*[^/]*jstl.*\\.jar$");
    org.eclipse.jetty.webapp.Configuration.ClassList classlist = org.eclipse.jetty.webapp.Configuration.ClassList.setServerDefault(server);
    classlist.addAfter("org.eclipse.jetty.webapp.FragmentConfiguration", "org.eclipse.jetty.plus.webapp.EnvConfiguration", "org.eclipse.jetty.plus.webapp.PlusConfiguration");
    classlist.addBefore("org.eclipse.jetty.webapp.JettyWebXmlConfiguration", "org.eclipse.jetty.annotations.AnnotationConfiguration");
    server.setHandler(ctx);
    server.start();
    server.join();*/

    /*startup = new StartUp();*/
    /*startup.setupAll();
    startup.join(); // block forever till the thread dies*//**//*
    startup.start();
    System.exit(1);*/
  }

  private static void setUpAll(){
    try {
      ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(256, 256,
        60, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>(),
        new ThreadFactoryWithName("JssWeb-Jetty", true));
      threadPoolExecutor.allowCoreThreadTimeOut(true);

      Server server = new Server(new ExecutorThreadPool(threadPoolExecutor));

      HttpConfiguration httpConfig = new HttpConfiguration();
      httpConfig.setSecureScheme("https");
      httpConfig.setSecurePort(9443);
      httpConfig.setOutputBufferSize(32768);

      ServerConnector httpConnector = new ServerConnector(server,
        new HttpConnectionFactory(httpConfig));
      httpConnector.setPort(8443);
      server.addConnector(httpConnector);

    /*if (true) {
      SslContextFactory sslContextFactory = new SslContextFactory();
      sslContextFactory.setKeyStorePath(keystorePath.getAbsolutePath());
      sslContextFactory.setKeyManagerPassword(keystorePassword);
      sslContextFactory.setKeyStorePassword(keystorePassword);
      return sslContextFactory;
      SslContextFactory sslContextFactory = SslUtil.getSslContextFactory();
      HttpConfiguration https_config = new HttpConfiguration(httpConfig);
      https_config.addCustomizer(new SecureRequestCustomizer());
      ServerConnector httpsConnector = new ServerConnector(server,
        new SslConnectionFactory(sslContextFactory, HttpVersion.HTTP_1_1.asString()),
        new HttpConnectionFactory(https_config));
      httpsConnector.setPort(9443);

      server.addConnector(httpsConnector);
    }*/

      ServletHandler handler = new ServletHandler();
      server.setHandler(handler);
      final String servletName = "HttpServlet";
      ServletHolder servlet = new ServletHolder(servletName, HttpServlet.class);
      handler.addServlet(servlet);
      ServletMapping servletMapping = new ServletMapping();
      servletMapping.setServletName(servletName);
      servletMapping.setPathSpecs(new String[]{"", "/webapp/index.jsp", "/html/index.html"});
      handler.addServletMapping(servletMapping);
      server.start();
      server.join();
      //this.join();
    }
    catch(Exception e){
      System.out.println(e.getLocalizedMessage());
    }
  }

  public static void start() {
    try {
      setUpAll();
      startup.join();
    } catch (Exception e) {
      e.printStackTrace();
    }
    //
  }

  private void join() {
    try {
      Thread.currentThread().join();
    } catch (InterruptedException e) {
      //ErrorBase.onFatal(e);
      System.out.println(e);
    } finally {
      //_logger.info(MsgKeys.THE_END);
      System.out.println("THE_END");
    }
  }

}
