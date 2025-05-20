DROP DATABASE IF EXISTS inventory_app;

CREATE DATABASE inventory_app;

\c inventory_app

CREATE TABLE Users (
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    user_id BIGINT PRIMARY KEY
);

CREATE TABLE Items (
    item_name VARCHAR(255),
    quantity INT,
    user_id  BIGINT REFERENCES Users(user_id) ON DELETE CASCADE,
    PRIMARY KEY (item_name, user_id)
);

INSERT INTO Users (email, password_hash, user_id) VALUES ('alice@email.com', 'password', 1);

INSERT INTO Items (item_name, quantity, user_id) VALUES 
('egg', 12, 1),
('apple', 2, 1),
('lighter', 1, 1),
('battery', 0, 1);