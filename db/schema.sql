DROP DATABASE IF EXISTS stats_db;

CREATE DATABASE stats_db;

USE stats_db;

CREATE table burgers (
    id INT NOT NULL AUTO_INCREMENT,
    stat_name VARCHAR(25) NOT NULL,
    called BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
