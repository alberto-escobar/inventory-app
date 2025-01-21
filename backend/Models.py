# This file outlines models which is used for validating and parsing the request payloads.

from pydantic import BaseModel

class RegisterRequest(BaseModel):
    email: str
    password_hash: str

class LoginRequest(BaseModel):
    email: str
    password_hash: str

class CreateItemRequest(BaseModel):
    user_id: int
    item_name: str
    quantity: int

class UpdateItemRequest(BaseModel):
    user_id: int
    item_name: str
    quantity: int

class DeleteItemRequest(BaseModel):
    user_id: int
    item_name: str