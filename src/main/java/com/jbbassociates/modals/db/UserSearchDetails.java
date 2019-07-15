package com.jbbassociates.modals.db;


import javax.persistence.*;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "user_history_table")
public class UserSearchDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private int userId;

  @Column(name = "bookmarked_homes")
  private String bookmarkedHomes;

  @Column(name = "last_search_time")
  private String lastSearchedTime;

  @Column(name = "last_online_time")
  private String lastOnlineTime;

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

  public String getLastSearchedTime() {
    return lastSearchedTime;
  }

  public void setLastSearchedTime(String lastSearchedTime) {
    this.lastSearchedTime = lastSearchedTime;
  }

  public String getLastOnlineTime() {
    return lastOnlineTime;
  }

  public void setLastOnlineTime(String lastOnlineTime) {
    this.lastOnlineTime = lastOnlineTime;
  }
}

