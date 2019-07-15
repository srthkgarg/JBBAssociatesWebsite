package com.jbbassociates.modals.db;


import javax.persistence.*;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "home_indexes_table")
public class HomeIndexes {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "home_id")
  private int homeId;

  @Column(name = "keywords")
  private String keywords;

  @Column(name = "enable_auto_indexing")
  private boolean enableAutomaticIndexing;

  /**
   *
   */
  public HomeIndexes() {

  }

  public int getHomeId() {
    return homeId;
  }

  public void setHomeId(int homeId) {
    this.homeId = homeId;
  }

  public String getKeywords() {
    return keywords;
  }

  public void setKeywords(String keywords) {
    this.keywords = keywords;
  }

  public boolean isEnableAutomaticIndexing() {
    return enableAutomaticIndexing;
  }

  public void setEnableAutomaticIndexing(boolean enableAutomaticIndexing) {
    this.enableAutomaticIndexing = enableAutomaticIndexing;
  }
}

