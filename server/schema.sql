DROP DATABASE moviesList;
CREATE DATABASE moviesList;

USE moviesList;

CREATE TABLE movies (
  ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  hasWatched BOOLEAN NOT NULL DEFAULT false
);