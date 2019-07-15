package com.jbbassociates.utils;

import com.jbbassociates.enums.UserRole;

/**
 * UserUtil is a class used to all types of methods used for user based manipulations.
 */
public class UserUtil {

  /**
   *
   * @param userId
   * @return
   */
  static UserRole getUserRole(int userId) {
    //Todo: get role value from db for the user Id.
    return UserRole.BUYER;
  }

  /**
   *
   * @param userId
   * @return
   */
  static boolean isAdmin(int userId) {
    return UserUtil.isAdmin(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isAdmin(String role) {
    return UserUtil.isAdmin(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isAdmin(UserRole role) {
    return role == UserRole.ADMIN;
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isSeller(String role) {
    return UserUtil.isSeller(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isSeller(UserRole role) {
    return role == UserRole.SELLER;
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isBuyer(String role) {
    return UserUtil.isBuyer(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isBuyer(UserRole role) {
    return role == UserRole.BUYER;
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isPropertyDealer(String role) {
    return UserUtil.isPropertyDealer(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  static boolean isPropertyDealer(UserRole role) {
    return role == UserRole.PROPERTY_DEALER;
  }

}