package com.jbbassociates.modals.db;


import javax.persistence.*;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "user_details_table")
public class UserDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private int userId;

  @Column(name = "password")
  private String password;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "email_id")
  private String emailId;

  @Column(name = "role_id")
  private int roleId;

  @Column(name = "subscribe_news")
  private boolean subscribeNews;

  @Column(name = "subscribe_emails")
  private boolean subscribeEmails;

  @Column(name = "subscribe_msgs")
  private boolean subscribeMsgs;

  @Column(name = "joining_date")
  private Date joiningDate;

  @Column(name = "is_active")
  private boolean isActive;

  /**
   *
   */
  public UserDetails() {

  }

  /**
   *
   * @param firstName
   * @param lastName
   * @param emailId
   */
  public UserDetails(String firstName, String lastName, String emailId) {
    this(firstName, lastName, emailId, false);
  }

  /**
   *
   * @param firstName
   * @param lastName
   * @param emailId
   * @param isAdmin
   */
  public UserDetails(String firstName, String lastName, String emailId, boolean isAdmin) {
    this(firstName, lastName, emailId, isAdmin, true, true, true);
  }

  /**
   *
   * @param firstName
   * @param lastName
   * @param emailId
   * @param isAdmin
   * @param subscribeEmails
   * @param subscribeMsgs
   * @param subscribeNewsFeed
   */
  public UserDetails(String firstName, String lastName, String emailId, boolean isAdmin, boolean subscribeEmails, boolean subscribeMsgs, boolean subscribeNewsFeed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    //this.roleId = isAdmin? Role.ADMIN : Role.USER;
    this.subscribeEmails = subscribeEmails;
    this.subscribeMsgs = subscribeMsgs;
    this.subscribeNews = subscribeNewsFeed;
    this.joiningDate = new Date();
    this.isActive = true;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmailId() {
    return emailId;
  }

  public void setEmailId(String emailId) {
    this.emailId = emailId;
  }

  public int getRoleId() {
    return roleId;
  }

  public void setRoleId(int roleId) {
    this.roleId = roleId;
  }

  public boolean isSubscribeNews() {
    return subscribeNews;
  }

  public void setSubscribeNews(boolean subscribeNews) {
    this.subscribeNews = subscribeNews;
  }

  public boolean isSubscribeEmails() {
    return subscribeEmails;
  }

  public void setSubscribeEmails(boolean subscribeEmails) {
    this.subscribeEmails = subscribeEmails;
  }

  public boolean isSubscribeMsgs() {
    return subscribeMsgs;
  }

  public void setSubscribeMsgs(boolean subscribeMsgs) {
    this.subscribeMsgs = subscribeMsgs;
  }

  public Date getJoiningDate() {
    return joiningDate;
  }

  public void setJoiningDate(Date joiningDate) {
    this.joiningDate = joiningDate;
  }

  public boolean isActive() {
    return isActive;
  }

  public void setActive(boolean active) {
    isActive = active;
  }
}

