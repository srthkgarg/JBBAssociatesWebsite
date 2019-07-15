package com.jbbassociates.controllers;

import com.jbbassociates.modals.db.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @GetMapping(path = "/user/details")
  public UserDetails fetchUserDetails() {
    UserDetails user = new UserDetails();
    return user;
  }

  @PostMapping(path = "/user/add")
  public void addNewUser(UserDetails userDetails) {

  }

  @PutMapping(path = "/user/update")
  public void updateUser(UserDetails userDetails) {

  }

  @PostMapping(path = "/user/delete")
  public void deleteUser(int userId) {

  }

  @PutMapping(path = "/user/deactivate")
  public void deactivateUser(int userId) {

  }

  @GetMapping(path = "/user/homes/subscribed")
  public void fetchSubscribedHomes() {

  }

  @GetMapping(path = "/user/homes/sell")
  public void fetchOwnedHomes() {

  }
}