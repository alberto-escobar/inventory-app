# Inventory Web app

keep track of your inventory with this simple app!

this project is a template project of a CRUD app that is light weight, efficent, minimal and easy to study and use when faced with a fast prototyping challenge (hackathon). The goal of this template is to provide an easy to pick up and hack repo and get your project running on a publicly available server so that you may demo your project at a fully functional capacity. This template will not provide you with any ideas or winning routes, those you need to come up on your own!

tech stack:

- python
- postgresql
- fastapi

## Specifications/User Stories

- As a user I should be able to register an account
- As a user I should be able to log into my account
- As a user, after logging in, I should be able to view the items I have in my inventory. (READ)
- As a user, after logging in, I should be be able to add an item to my inventory. When Adding an item I can state the quantity I have of the item. (CREATE)
- As a user, after logging in, I should be able to update the quanity of an item I have (UPDATE)
- As a user, after logging in, I should be able to delete an items from my inventory (DELETE)

## Architecture

![image](resources\architecture.png)

## Database Design

### Users table

| column name   | column type | primary key |
| ------------- | ----------- | ----------- |
| email         | varchar     | no          |
| password_hash | varchar     | no          |
| user_id       | varchar     | yes         |

### Items table

| column name | column type | primary key |
| ----------- | ----------- | ----------- |
| item_name   | varchar     | yes         |
| user_id\*   | varchar     | yes         |
| quantity    | varchar     | no          |

\*user_id will also be a forign key to Users

## API Endpoints

| method | name       | parameters                   | returns         |
| ------ | ---------- | ---------------------------- | --------------- |
| POST   | register   | email, password_hash         | success/failure |
| POST   | login      | email, password_hash         | user_id         |
| GET    | getItems   | user_id                      | list of items   |
| POST   | createItem | user_id, item_name, quantity | success/failure |
| POST   | updateItem | user_id, item_name, quantity | success/failure |
| DELETE | deleteItem | user_id, item_name           | success/failure |

## Errors

- general errors
- error connecting to server
- error connecting to database
- error registering, account exists
- error logging in, credientials are wrong
- error creating item, item already in inventory
- error updating item, item not in inventory
- error updating item, invalid quantity
- error deleting item, item not in inventory
