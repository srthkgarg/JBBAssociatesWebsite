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
  public static UserRole getUserRole(int userId) {
    //Todo: get role value from db for the user Id.
    return UserRole.BUYER;
  }

  /**
   *
   * @param userId
   * @return
   */
  public static boolean isSuperAdmin(int userId) {
    return UserUtil.isSuperAdmin(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isSuperAdmin(String role) {
    return UserUtil.isSuperAdmin(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isSuperAdmin(UserRole role) {
    return role == UserRole.SUPER_ADMIN;
  }

  /**
   *
   * @param userId
   * @return
   */
  public static boolean isAdmin(int userId) {
    return UserUtil.isAdmin(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isAdmin(String role) {
    return UserUtil.isAdmin(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isAdmin(UserRole role) {
    return role == UserRole.ADMIN;
  }

  /**
   *
   * @param userId
   * @return
   */
  public static boolean isSeller(int userId) {
    return UserUtil.isSeller(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isSeller(String role) {
    return UserUtil.isSeller(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isSeller(UserRole role) {
    return role == UserRole.SELLER;
  }

  /**
   *
   * @param userId
   * @return
   */
  public static boolean isBuyer(int userId) {
    return UserUtil.isBuyer(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isBuyer(String role) {
    return UserUtil.isBuyer(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isBuyer(UserRole role) {
    return role == UserRole.BUYER;
  }

  /**
   *
   * @param userId
   * @return
   */
  public static boolean isPropertyDealer(int userId) {
    return UserUtil.isPropertyDealer(UserUtil.getUserRole(userId));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isPropertyDealer(String role) {
    return UserUtil.isPropertyDealer(UserRole.toEnum(role));
  }

  /**
   *
   * @param role
   * @return
   */
  public static boolean isPropertyDealer(UserRole role) {
    return role == UserRole.PROPERTY_DEALER;
  }

}