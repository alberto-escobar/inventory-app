-- This file is a script used to setup your database. Ideally you should connect 
-- to the database and execute this script via CLI.
-- !!!
-- BE SURE TO CHANGE THE NAMES OF THE DATABASE AND TABLES 
-- TO MATCH YOUR PROJECT SPECIFICATIONS IF YOU ARE USING 
-- THIS PROJECT AS A TEMPLATE 

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
    item_name VARCHAR(255),
    quantity INT,
    user_id  INT REFERENCES Users(user_id) ON DELETE CASCADE,
    PRIMARY KEY (item_name, user_id)
);