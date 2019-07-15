package com.jbbassociates.services.dao;

import com.jbbassociates.modals.db.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

/**
 * Interface for User Details db transaction.
 */
@Repository
@Transactional
public class UserDetailsDAOImpl implements IntfUserDetailsDAO {

  @Autowired
  private HibernateTemplate hibernateTemplate;

  /**
   *
   * @return {List<UserDetails>}
   */
  public List<UserDetails> getAllUsers() {
    List<UserDetails> allUsersList = new LinkedList<UserDetails>();
    return allUsersList;
  }

  /**
   *
   * @return {List<UserDetails>}
   */
  public List<UserDetails> getFilteredUserDetails() {
    List<UserDetails> filteredUsers = new LinkedList<UserDetails>();
    return filteredUsers;

  }

  public UserDetails getUserByUserId(int userId) {
    List<?> userDetails = hibernateTemplate.find("from UserDetails where userId = ? ", userId);
    return userDetails != null && !userDetails.isEmpty() ? (UserDetails) userDetails.get(0) : null;

  }

  public UserDetails getUserByEmailId(String emailId) {
    List<?> userDetails = hibernateTemplate.find("from UserDetails where emailId = ? ", emailId);
    return userDetails != null && !userDetails.isEmpty() ? (UserDetails) userDetails.get(0) : null;
  }

  /**
   *
   * @param userDetails {UserDetails}
   */
  public void saveOrUpdate(UserDetails userDetails) {
    hibernateTemplate.saveOrUpdate(userDetails);
  }

  /**
   *
   * @param userDetails {UserDetails}
   */
  public void delete(UserDetails userDetails) {
    hibernateTemplate.delete(userDetails);
  }
}

