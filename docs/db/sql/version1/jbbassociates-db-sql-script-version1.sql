DROP DATABASE IF EXISTS `jbb-associates-db`;

CREATE DATABASE IF NOT EXISTS `jbb-associates-db`;
USE `jbb-associates-db`;

-- Table structure for table `user_details_table`
DROP TABLE IF EXISTS `user_details_table`;
CREATE TABLE `user_details_table` (
  `user_id` int(11) NOT NULL auto_increment,
  `password` char(120) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email_id` varchar(70) NOT NULL,
  `mobile_no` int(11) NOT NULL,
  `role` varchar(20) NOT NULL,
  `joining_date` DATETIME NOT NULL,
  `is_active` bit NOT NULL DEFAULT 1,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY (`user_id`, `email_id`, `mobile_no`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1
COMMENT = 'Table to store all users data.';

-- Table structure for table `user_search_table`
DROP TABLE IF EXISTS `user_search_table`;
CREATE TABLE `user_search_table` (
  `user_id` INT NOT NULL,
  `subscribe_news` BIT NOT NULL DEFAULT 1,
  `subscribe_emails` BIT NOT NULL DEFAULT 1,
  `subscribe_msgs` BIT NOT NULL,
  `bookmarked_homes` LONGTEXT NULL,
  `last_search_time` DATETIME NULL,
  `last_online_time` DATETIME NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX (`user_id`))
COMMENT = 'Table to store all searched or subscribed by user data.';

-- Table structure for table `home_details_table`
DROP TABLE IF EXISTS `home_details_table`;
CREATE TABLE `home_details_table` (
  `home_id` int(11) NOT NULL auto_increment,
  `seller_id` int(11) NOT NULL,
  `property_type` varchar(20) NOT NULL,
  `property_sell_type` varchar(20) NOT NULL,
  `sell_status` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  `area` varchar(50) NOT NULL,
  `pin_code` int(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `currency_type` varchar(20) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `submitted_date` DATETIME NOT NULL,
  `bought_date` DATETIME NULL,
  `buyer_id` int(11) NULL,
  `db_path` varchar(200) NOT NULL,
  PRIMARY KEY (`home_id`),
  UNIQUE KEY (`home_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1
COMMENT = 'Table to store all homes data.';

-- Table structure for table `home_indexes_table`
DROP TABLE IF EXISTS `home_indexes_table`;
CREATE TABLE `home_indexes_table` (
  `home_id` INT NOT NULL,
  `keywords` LONGTEXT NOT NULL,
  `enable_auto_indexing` BIT NOT NULL DEFAULT 1,
  PRIMARY KEY (`home_id`),
  UNIQUE INDEX (`home_id`))
COMMENT = 'Table to store all indexes for each home.';
