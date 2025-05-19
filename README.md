# Inventory Web app

keep track of your inventory with this simple app!

The most CRUD app of all time. This project is a template project of a CRUD app that is light weight, efficent, minimal and easy to study and use when faced with a fast prototyping challenge (hackathon). The goal of this template is to provide an easy to pick up and hack repo and get your project running on a publicly available server so that you may demo your project at a fully functional capacity. This template will not provide you with any ideas or winning routes, those you need to come up on your own!

tech stack:

- postgresql: database
- python: backend programming language
- fastapi: backend framework

- javascirpt: front programming language
- react: frontend framework
- vite: Help with development by running locally
- tailwindcss: UI

This tech stack is the bar minimum I could get it. Fastapi could be subbed for other API frameworks. tailwindcss could be subbed for other UI options.

## Specifications/User Stories

- As a user I should be able to register an account
- As a user I should be able to log into my account
- As a user I should be able to log out of my account
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

## Backend dev

TBA

## Frontend dev

The front end uses a **router** mechanism. This was choosen so that the front end does not have to constantly reload when change pages.
The template features a fairly simple frontend deisgn:

- landing page with pages for login and registration
- after logging in, you are taken to the home page and can access the bottom navigation bar
- The bottom navigation bar contains routes for other pages a logged user can access (e.g. settings)

Creating pages is simple:

1. create the page `.jsx` file in `frontend/src/pages`
2. add a route to `App.jsx` that leads to the page
3. _optional_ add link to the page in `frontend/src/components/BottomNav.jsx`

## How to deploy to Render

1. Make a render account
2. Create a project, this helps organize your services
3. Create a postgres database service, use the free tier
4. Take note of the internal database connection url and external database connection url
5. Use the external database connection url with your terminal to connect and setup your database: `pql <external database connection url>`
6. Create a web service, connect your project repo to it, use the following configurations:
   - Root Directory = backend
   - Build Command = pip install -r requirements.txt
   - Start Command = uvicorn API:app --host 0.0.0.0 --port $PORT
   - add an environment variables with the following details:
     - name of variable = `DB_URL`
     - value = `<internal database connection url>`
7. Create a static site, connect your project repo to it, use the following configurations:
   - a
   - b
     - a
     - b
