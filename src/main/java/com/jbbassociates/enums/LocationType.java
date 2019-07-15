package com.jbbassociates.enums;

/**
 *
 */
public enum LocationType {
  DELHI("Delhi"),
  GURGAON("Gurgaon"),
  NOIDA("Noida");

  private final String value;

  private LocationType(String value) {
    this.value = value;
  }

  public String getStatus() {
    return this.value;
  }

  public String toString() {
    return value;
  }
}
