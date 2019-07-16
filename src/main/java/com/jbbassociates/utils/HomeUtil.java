package com.jbbassociates.utils;

import com.jbbassociates.modals.db.HomeDetails;

/**
 * HomeUtil is a class used to all types of methods used for homes based manipulations.
 */
public class HomeUtil {

  /**
   *
   * @param homeDetails {HomeDetails}
   * @return {String}
   */
  static String getCompleteAddress(HomeDetails homeDetails) {
    return String.format("%1, %2, %3 - %4", homeDetails.getAddress(), homeDetails.getArea(), homeDetails.getCity(), homeDetails.getPinCode());
  }

}