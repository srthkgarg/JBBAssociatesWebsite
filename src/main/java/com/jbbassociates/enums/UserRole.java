package com.jbbassociates.enums;

/**
 *
 */
public enum UserRole {
  ADMIN("Admin"),
  SELLER("Seller"),
  BUYER("Buyer"),
  PROPERTY_DEALER("Property Dealer");

  private final String value;

  private UserRole(String value) {
    this.value = value;
  }

  public static UserRole toEnum(String value) {
    //Todo: calculate user role here from values.
    return UserRole.BUYER;
  }

  public String toString() {
    return value;
  }
}
