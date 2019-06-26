# **JBB Associates Web Application**
In this application we are using React JS with ES6 for front-end and Java with Spring MVC on backend.
Some of the third party libraries used are :
1. On Java end,
   a. Jetty for the server.
   b. Spring libraries for Spring MVC setup.
   c. SMTP libraries for mail services.
2. On front - end,
   a. React, Jquery and other JS libraries.
   b. bootstrap and font-awesome for CSS libraries.
Web Application's github link is as follows :
https://github.com/srthkgarg/JBBAssociatesWebsite

# Required Tools 
1. Node v8+ for npm
2. Visual Studio Code - Latest Version 
3. Java 8+
4. Eclipse - Oxygen+ - (Embedded Maven From Eclipse) or Intellij 2016.3.4+
5. DB like MySQL (any)

# Set-up
Steps :
1. Install Node Js | NPM (Node Package Manager).
2. Install java 8+ JDK and setup the environment path for it.
3. Install a DB (preferably a SQL DB, say, MYSQL - any version)
4. Install Intellij, Visual Studio Code and Eclipse, whichever you feels convenient to. We have used Intellij, so the setup will be accrding to it only.
5. Import the project as gradle project in Intellij/Eclipse. You can open the webapp as separate front end project in Visual Studio Code.
6. Setup an application configuration to run the project in Intellij with following credentials :
   a. com.jbbassociates.StartUp as the Start class.
   b. "JBBAssociatesWebsite"  code directory as the working directory.
   c. JBBAssociatesWebsites_main as the module.
   d. Mention the log file path here as mentioned in app.properties.
7. Configure the app.properties accordingly.

# Gradle Tasks Available 
