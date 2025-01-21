-- This file is a script used to inject mockdata into your database after running setup.sql
-- !!!
-- MAKE SURE TO CHANGE THE COMMANDS HERE TO MATCH YOUR TABLES

INSERT INTO Users (email, password_hash, user_id) VALUES ('alice@email.com', 'password', 100);

INSERT INTO Items (item_name, quantity, user_id) VALUES 
('egg', 12, 100),
('apple', 2, 100),
('lighter', 1, 100),
('battery', 0, 100);
