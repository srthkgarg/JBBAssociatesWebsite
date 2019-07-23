package com.jbbassociates.controllers;

import com.jbbassociates.modals.beans.AuthenticationBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  @Autowired
  private Environment env;

  private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @GetMapping(path = "/auth")
  public AuthenticationBean authenticate() {
    return new AuthenticationBean(HttpStatus.OK);
  }

  @GetMapping(path = "/checkAuth")
  public AuthenticationBean checkAuthentication() {
    return new AuthenticationBean(HttpStatus.OK);
  }

}