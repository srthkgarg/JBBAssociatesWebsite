package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum PropertySellType {
  SALE("Sale"),
  RENT("Rent");

  private static Logger logger = Logger.getLogger(PropertySellType.class.getName());

  private final String value;

  private PropertySellType(String value) {
    this.value = value;
  }

  public static PropertySellType toEnum(String value) {
    return PropertySellType.toEnum(value, null);
  }

  public static PropertySellType toEnum(String value, PropertySellType defaultValue) {
    PropertySellType type = defaultValue;
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
