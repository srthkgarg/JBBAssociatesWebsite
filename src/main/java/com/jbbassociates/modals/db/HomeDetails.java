package com.jbbassociates.modals.db;


import javax.persistence.*;
import java.util.Date;

/**
 *
 */
@Entity
@Table(name = "home_details_table")
public class HomeDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "home_id")
  private int homeId;

  @Column(name = "seller_id")
  private int sellerId;

  @Column(name = "property_type")
  private String propertyType;

  @Column(name = "property_sell_type")
  private String propertySellType;

  @Column(name = "sell_status")
  private String sellStatus;

  @Column(name = "address")
  private String address;

  @Column(name = "area")
  private String area;

  @Column(name = "pin_code")
  private int pinCode;

  @Column(name = "city")
  private String city;

  @Column(name = "country")
  private String country;

  @Column(name = "price")
  private int price;

  @Column(name = "description")
  private String description;

  @Column(name = "submitted_date")
  private Date submittedDate;

  @Column(name = "bought_date")
  private Date boughtDate;

  @Column(name = "buyer_id")
  private Date buyerId;

  @Column(name = "db_path")
  private String dbPath;

  /**
   *
   */
  public HomeDetails() {

  }

  public int getHomeId() {
    return homeId;
  }

  public void setHomeId(int homeId) {
    this.homeId = homeId;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getSubmittedDate() {
    return submittedDate;
  }

  public void setSubmittedDate(Date submittedDate) {
    this.submittedDate = submittedDate;
  }

  public String getDbPath() {
    return dbPath;
  }

  public void setDbPath(String dbPath) {
    this.dbPath = dbPath;
  }

  public int getSellerId() {
    return sellerId;
  }

  public void setSellerId(int sellerId) {
    this.sellerId = sellerId;
  }

  public Date getBoughtDate() {
    return boughtDate;
  }

  public void setBoughtDate(Date boughtDate) {
    this.boughtDate = boughtDate;
  }

  public Date getBuyerId() {
    return buyerId;
  }

  public void setBuyerId(Date buyerId) {
    this.buyerId = buyerId;
  }

  public String getPropertyType() {
    return propertyType;
  }

  public void setPropertyType(String propertyType) {
    this.propertyType = propertyType;
  }

  public String getPropertySellType() {
    return propertySellType;
  }

  public void setPropertySellType(String propertySellType) {
    this.propertySellType = propertySellType;
  }

  public String getSellStatus() {
    return sellStatus;
  }

  public void setSellStatus(String sellStatus) {
    this.sellStatus = sellStatus;
  }

  public int getPinCode() {
    return pinCode;
  }

  public void setPinCode(int pinCode) {
    this.pinCode = pinCode;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getArea() {
    return area;
  }

  public void setArea(String area) {
    this.area = area;
  }
}

