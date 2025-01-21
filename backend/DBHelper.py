# This file defines a python class that helps you interact with the postgreSQL database. In this class we define all the database operations we wish to perform as methods of the class that we can call in other parts of our backend.

import psycopg2

class DBHelper:
    def __init__(self):
        return None

    def registerUser(self, email: str, password_hash: str) -> bool:
        return False
    
    def loginUser(self, email: str, password_hash: str) -> bool:
        return False
    
    def getItems(self, user_id: int) -> list:
        return []
    
    def createItem(self, user_id: int, item_name: str, quantity: int) -> bool:
        return False
    
    def deleteitem(self, user_id, item_name) -> bool:
        return False

    def updateItem(self, user_id, item_name, quantity) -> bool:
        return False