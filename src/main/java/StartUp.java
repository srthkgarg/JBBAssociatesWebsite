import org.codehaus.jettison.json.JSONException;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.server.session.SessionHandler;
import org.eclipse.jetty.servlet.*;
import org.eclipse.persistence.sessions.factories.SessionManager;
import org.json.simple.JSONObject;
import utilities.WebUtil;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Sarthak on 09-07-2017.
 */
public class StartUp {

  public static void main(String[] args) throws Exception {
    /*Server server = new Server(8080);

    final String servletName = "DefaultServlet";
    ServletHolder holder = new ServletHolder(servletName, DefaultServlet.class);
    ServletMapping servletMapping = new ServletMapping();
    servletMapping.setServletName(servletName);
    servletMapping.setPathSpecs(new String[]{"", "/index.jsp", "/html/index.html"});

    ServletHandler handler = new ServletHandler();
    handler.addServlet(holder);
    handler.addServletMapping(servletMapping);

    server.setHandler(handler);
    server.start();
    server.join();*/

    /*// Startup stuff
    final Server server = new Server(8080);
    ServletContextHandler handler = new ServletContextHandler();
    handler.setResourceBase("../webapp/");

    SessionHandler sh = new SessionHandler();
    handler.setSessionHandler(sh);

    DefaultServlet defaultServlet = new DefaultServlet();
    ServletHolder holder = new ServletHolder(defaultServlet);
    holder.setInitParameter("useFileMappedBuffer", "false");
    handler.addServlet(holder, "/");
    handler.setWelcomeFiles(new String[]{"/html/index.html"});

    server.setHandler(handler);
    server.start();
    server.join();*/


    Server server = new Server(8080);

    ResourceHandler resource_handler = new ResourceHandler();
    //resource_handler.setDirectoriesListed(true);
    resource_handler.setWelcomeFiles(new String[]{"\\html\\index.html"});
    resource_handler.setResourceBase(".\\src\\main\\webapp");

    HandlerList handlers = new HandlerList();
    handlers.setHandlers(new Handler[]{resource_handler, new DefaultHandler()});
    server.setHandler(handlers);

    server.start();
    server.join();
  }
/*
  *//**
   * Note: class has to be public static, so that server can instantiate it..
   *//*
  public static class DefaultServlet extends HttpServlet {
    public DefaultServlet() {
      super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      resp.setHeader("Refresh", "30");
      final boolean json = WebUtil.getParam(req, "json", false);
      resp.setContentType(json ? "application/json;charset=utf-8" : "text/html;charset=utf-8");
      resp.getWriter().write("\\html\\index.html");
      *//*try {
        String response;
        if (json) {
          response = rows != null ? jsonIndent > 0 ? rows.toString(2) : rows.toString() : "{}";
        } else {
          response = sb != null ? sb.toString() : "";
        }
        resp.getWriter().write(response);
      } catch (JSONException e) {
        e.printStackTrace();
      }*//*
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      doGet(req, resp);
    }
  }*/
}
