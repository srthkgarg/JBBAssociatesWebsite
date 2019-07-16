package com.jbbassociates.controllers;

import com.jbbassociates.modals.beans.AuthenticationBean;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  @GetMapping(path = "/auth")
  public AuthenticationBean authenticate() {
    return new AuthenticationBean(HttpStatus.OK);
  }

  @GetMapping(path = "/checkAuth")
  public AuthenticationBean checkAuthentication() {
    return new AuthenticationBean(HttpStatus.OK);
  }

}