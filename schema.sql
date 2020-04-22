/*execute from command line mysql -u student -p < schema.sql */

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,

  PRIMARY KEY(id)
);