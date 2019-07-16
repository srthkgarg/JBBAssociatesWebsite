package com.jbbassociates.enums;

import com.jbbassociates.logging.Logger;

/**
 *
 */
public enum PropertySellStatus {
  AVAILABLE("Available"),
  RENTED("Rented"),
  SOLD_OUT("Sold out");

  private static Logger logger = Logger.getLogger(PropertySellType.class.getName());

  private final String value;

  private PropertySellStatus(String value) {
    this.value = value;
  }

  public static PropertySellStatus toEnum(String value) {
    return PropertySellStatus.toEnum(value, null);
  }

  public static PropertySellStatus toEnum(String value, PropertySellStatus defaultValue) {
    PropertySellStatus status = defaultValue;
    try {
      status = valueOf(value);
    }
    catch (Exception ex) {
      logger.warn(ex.getLocalizedMessage());
    }
    return status;
  }

  public String toString() {
    return value;
  }
}
