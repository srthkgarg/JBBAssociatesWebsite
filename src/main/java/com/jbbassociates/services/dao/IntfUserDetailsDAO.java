package com.jbbassociates.services.dao;

import com.jbbassociates.modals.db.UserDetails;
import java.util.List;

/**
 * Interface for User Details db transaction.
 */
public interface IntfUserDetailsDAO {

  /**
   *
   * @return
   */
  List<UserDetails> getAllUsers();

  /**
   *
   * @return
   */
  List<UserDetails> getFilteredUserDetails();

  /**
   *
   * @return
   */
  UserDetails getUserByUserId(int userId);

  /**
   *
   * @return
   */
  UserDetails getUserByEmailId(String emailId);

  /**
   *
   * @param userDetails
   */
  void saveOrUpdate(UserDetails userDetails);

  /**
   *
   * @param userDetails
   */
  void delete(UserDetails userDetails);
}

