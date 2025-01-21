# This file defines out API endpoints for our program. This is where the 
# HTTP requests from the frontend react app will be recieved and processed. 
# DBHelper is used here to interact with the postgreSQL database.
from fastapi import FastAPI, HTTPException
from DBHelper import DBHelper
from Models import *

app = FastAPI()
db = DBHelper()

@app.get("/")
def read_root():
    return {"message": "Welcome to Inventory App API!"}


@app.post("/registerUser")
def register_user(request: RegisterRequest):
    success = db.registerUser(request.email, request.password_hash)
    if success:
        return {"message": "User registered successfully"}
    raise HTTPException(status_code=400, detail="Registration failed")


@app.post("/loginUser")
def login_user(request: LoginRequest):
    user_id = db.loginUser(request.email, request.password_hash)
    if user_id > 0:
        return {"user_id": user_id}
    elif user_id == 0:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    raise HTTPException(status_code=500, detail="An error occurred during login")


@app.get("/getItems/{user_id}")
def get_items(user_id: int):
    items = db.getItems(user_id)
    if items is not None:
        return {"items": items}
    raise HTTPException(status_code=500, detail="An error occurred while fetching items")


@app.post("/createItem")
def create_item(request: CreateItemRequest):
    success = db.createItem(request.user_id, request.item_name, request.quantity)
    if success:
        return {"message": "Item created successfully"}
    raise HTTPException(status_code=400, detail="Failed to create item")


@app.delete("/deleteItem")
def delete_item(request: DeleteItemRequest):
    success = db.deleteItem(request.user_id, request.item_name)
    if success:
        return {"message": "Item deleted successfully"}
    raise HTTPException(status_code=400, detail="Failed to delete item")


@app.post("/updateItem")
def update_item(request: UpdateItemRequest):
    success = db.updateItem(request.user_id, request.item_name, request.quantity)
    if success:
        return {"message": "Item updated successfully"}
    raise HTTPException(status_code=400, detail="Failed to update item")