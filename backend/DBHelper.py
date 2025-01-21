# This file defines a python class that helps you interact with the postgreSQL database. In this class we define all the database operations we wish to perform as methods of the class that we can call in other parts of our backend.

import psycopg2
import config

class DBHelper:
    def __init__(self):
        self.connection = psycopg2.connect(
            dbname=config.DB_NAME,
            user=config.DB_USER,
            password=config.DB_PASSWORD,
            host=config.DB_HOST,
            port=config.DB_PORT
        )

    def __del__(self):
        self.connection.close()

    def registerUser(self, email: str, password_hash: str) -> bool:
        cursor = self.connection.cursor()
        try:
            cursor.execute("INSERT INTO Users (email, password_hash) VALUES (%s, %s);", (email, password_hash))
        except Exception as e:
            print(f"Error occured during registerUser: {e}")
            return False
        self.connection.commit()
        cursor.close()
        return True
    
    def loginUser(self, email: str, password_hash: str) -> int:
        cursor = self.connection.cursor()
        try:
            cursor.execute("SELECT user_id FROM Users WHERE email LIKE %s AND password_hash LIKE %s;", (email, password_hash))
        except Exception as e:
            print(f"Error occured during loginUser: {e}")
            return -1
        results = cursor.fetchall()
        cursor.close()
        if len(results) == 1:
            return results[0][0]
        return 0
    
    def getItems(self, user_id: int) -> list:
        cursor = self.connection.cursor()
        try:
            cursor.execute("SELECT item_name, quantity FROM Items WHERE user_id = %s;", (user_id,))
        except Exception as e:
            print(f"Error occured during getItems: {e}")
            return None
        results = cursor.fetchall()
        cursor.close()
        return results
    
    def createItem(self, user_id: int, item_name: str, quantity: int) -> bool:
        cursor = self.connection.cursor()
        try:
            cursor.execute("INSERT INTO Items (user_id, item_name, quantity) VALUES (%s, %s, %s);", (user_id, item_name, quantity))
        except Exception as e:
            print(f"Error occured during createItem: {e}")
            return False
        self.connection.commit()
        cursor.close()
        return True
    
    def deleteItem(self, user_id, item_name) -> bool:
        cursor = self.connection.cursor()
        try:
            cursor.execute("DELETE FROM Items WHERE user_id = %s AND item_name LIKE %s;", (user_id, item_name,))
        except Exception as e:
            print(f"Error occured during createItem: {e}")
            return False
        self.connection.commit()
        cursor.close()
        return True

    def updateItem(self, user_id, item_name, quantity) -> bool:
        cursor = self.connection.cursor()
        try:
            cursor.execute("UPDATE Items SET quantity = %s WHERE user_id = %s AND item_name LIKE %s", (quantity, user_id, item_name,))
        except Exception as e:
            print(f"Error occured during createItem: {e}")
            return False
        self.connection.commit()
        cursor.close()
        return True