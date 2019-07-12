package com.jbbassociates.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

  @GetMapping(path = "/homes/recent")
  public void fetchRecentHomes() {

  }

  @GetMapping(path = "/homes/all")
  public void fetchAllHomes() {

  }

  @GetMapping(path = "/homes/search")
  public void fetchFilteredHomes() {

  }
}