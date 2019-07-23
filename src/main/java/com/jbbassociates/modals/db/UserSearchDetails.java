package com.jbbassociates.modals.db;


import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "user_search_table")
public class UserSearchDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private int userId;

  @Column(name = "subscribe_news")
  private boolean subscribeNews;

  @Column(name = "subscribe_emails")
  private boolean subscribeEmails;

  @Column(name = "subscribe_msgs")
  private boolean subscribeMsgs;

  @Column(name = "bookmarked_homes")
  private String bookmarkedHomes;

  @Column(name = "last_search_time")
  private Timestamp lastSearchedTime;

  @Column(name = "last_online_time")
  private Timestamp lastOnlineTime;

  /**
   *
   */
  public UserSearchDetails() {

  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public String getBookmarkedHomes() {
    return bookmarkedHomes;
  }

  public void setBookmarkedHomes(String bookmarkedHomes) {
    this.bookmarkedHomes = bookmarkedHomes;
  }

  public Timestamp getLastSearchedTime() {
    return lastSearchedTime;
  }

  public void setLastSearchedTime(Timestamp lastSearchedTime) {
    this.lastSearchedTime = lastSearchedTime;
  }

  public Timestamp getLastOnlineTime() {
    return lastOnlineTime;
  }

  public void setLastOnlineTime(Timestamp lastOnlineTime) {
    this.lastOnlineTime = lastOnlineTime;
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
}

