# This file defines out API endpoints for our program. This is where the HTTP requests from the frontend react app will be recieved and processed. DBHelper is used here to interact with the postgreSQL database.
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to Inventory App API!"}

@app.post("/registerUser")
def register_user():
    return 0

@app.post("/loginUser")
def login_user():
    return 0

@app.get("/getItems")
def get_items():
    return 0

@app.post("/createItem")
def create_item():
    return 0

@app.delete("/deleteItem")
def delete_item():
    return 0

@app.post("/updateItem")
def update_item():
    return 0
