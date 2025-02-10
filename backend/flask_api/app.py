import mysql.connector
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
DATABASE_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "Akshatsaxena12#",
    "database": "flow_db"
}
try:
    conn = mysql.connector.connect(**DATABASE_CONFIG)
    cursor = conn.cursor()
    print("MySQL connection successful")
except mysql.connector.Error as err:
    print(f"Error: {err}")

@app.route('/')
def hello_world():
    return {'message': 'Hello from Flask!'}

@app.route('/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
