package com.jbbassociates.controllers;

import com.jbbassociates.modals.db.HomeDetails;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

  @PostMapping(path = "/homes/add")
  public void addNewHome(HomeDetails homeDetails) {

  }

  @PutMapping(path = "/homes/update")
  public void updateHome(HomeDetails homeDetails) {

  }

  @PostMapping(path = "/homes/delete")
  public void deleteHome(int homeId) {

  }
}