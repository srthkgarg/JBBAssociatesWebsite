package com.jbbassociates.enums;

/**
 *
 */
public enum PropertySellType {
  SALE("Sale"),
  RENT("Rent");

  private final String value;

  private PropertySellType(String value) {
    this.value = value;
  }

  public String getStatus() {
    return this.value;
  }

  public String toString() {
    return value;
  }
}
