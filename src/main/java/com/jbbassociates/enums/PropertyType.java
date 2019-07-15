package com.jbbassociates.enums;

/**
 *
 */
public enum PropertyType {
  ROOM("Room"),
  FLAT("Flat"),
  HOUSE("House");

  private final String value;

  private PropertyType(String value) {
    this.value = value;
  }

  public String getStatus() {
    return this.value;
  }

  public String toString() {
    return value;
  }
}
