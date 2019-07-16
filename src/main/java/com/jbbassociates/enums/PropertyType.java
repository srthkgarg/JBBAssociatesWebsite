package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum PropertyType {
  ROOM("Room"),
  FLAT("Flat"),
  HOUSE("House");

  private static Logger logger = Logger.getLogger(PropertyType.class.getName());

  private final String value;

  private PropertyType(String value) {
    this.value = value;
  }

  public static PropertyType toEnum(String value) {
    return PropertyType.toEnum(value, null);
  }

  public static PropertyType toEnum(String value, PropertyType defaultValue) {
    PropertyType type = defaultValue;
    try {
      type = valueOf(value);
    }
    catch (Exception ex) {
      logger.warn(ex.getLocalizedMessage());
    }
    return type;
  }

  public String toString() {
    return value;
  }
}
