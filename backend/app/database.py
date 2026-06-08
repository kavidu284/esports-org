# database.py
import mysql.connector

def get_database_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Kavidu321@",
        database="monarchy_esports"
    )


def get_connection():
    return get_database_connection()

