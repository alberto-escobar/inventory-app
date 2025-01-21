-- Drop the database if it exists
DROP DATABASE IF EXISTS inventory_app;

-- Create a database (optional, if not already created)
CREATE DATABASE inventory_app;

-- Connect to the database
\c inventory_app

-- Create tables for app
CREATE TABLE Users (
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    user_id  SERIAL PRIMARY KEY
);

CREATE TABLE Items (
    item_name VARCHAR(255) PRIMARY KEY,
    quantity INT,
    user_id  INT REFERENCES Users(user_id) ON DELETE CASCADE
);