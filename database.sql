CREATE DATABASE userauth;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    userid INT,
    password VARCHAR(255)
);


CREATE TABLE cars (
  brand VARCHAR(255),
  model VARCHAR(255),
  year INT
);