package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum Location {
  DELHI("Delhi"),
  GURGAON("Gurgaon"),
  NOIDA("Noida"),
  UNKNOWN("Unknown");

  private static Logger logger = Logger.getLogger(Location.class.getName());

  private final String value;

  private Location(String value) {
    this.value = value;
  }

  public static Location toEnum(String value) {
    return Location.toEnum(value, Location.UNKNOWN);
  }

  public static Location toEnum(String value, Location defaultValue) {
    Location location = defaultValue;
    try {
      location = valueOf(value);
    }
    catch (Exception ex) {
      logger.warn(ex.getLocalizedMessage());
    }
    return location;
  }

  public String toString() {
    return value;
  }
}
