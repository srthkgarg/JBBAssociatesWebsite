package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum UserRole {
  SUPER_ADMIN("Super Admin"),
  ADMIN("Admin"),
  SELLER("Seller"),
  BUYER("Buyer"),
  PROPERTY_DEALER("Property Dealer");

  private static Logger logger = Logger.getLogger(UserRole.class.getName());

  private final String value;

  private UserRole(String value) {
    this.value = value;
  }

  public static UserRole toEnum(String value) {
    return UserRole.toEnum(value, UserRole.BUYER);
  }

  public static UserRole toEnum(String value, UserRole defaultRole) {
    UserRole role = defaultRole;
    try {
      role = valueOf(value);
    }
    catch (Exception ex) {
      logger.warn(ex.getLocalizedMessage());
    }
    return role;
  }

  public String toString() {
    return value;
  }
}
