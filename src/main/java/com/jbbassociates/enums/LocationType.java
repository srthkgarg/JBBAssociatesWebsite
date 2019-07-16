package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum LocationType {
  DELHI("Delhi"),
  GURGAON("Gurgaon"),
  NOIDA("Noida"),
  UNKNOWN("Unknown");

  private static Logger logger = Logger.getLogger(LocationType.class.getName());

  private final String value;

  private LocationType(String value) {
    this.value = value;
  }

  public static LocationType toEnum(String value) {
    return LocationType.toEnum(value, LocationType.UNKNOWN);
  }

  public static LocationType toEnum(String value, LocationType defaultValue) {
    LocationType locationType = defaultValue;
    try {
      locationType = valueOf(value);
    }
    catch (Exception ex) {
      logger.warn(ex.getLocalizedMessage());
    }
    return locationType;
  }

  public String toString() {
    return value;
  }
}
