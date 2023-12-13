CREATE DATABASE userauth;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    password VARCHAR(255),
    username VARCHAR(255)
    
);
