
from flask import Flask, render_template, request
from flask import g
import sqlite3


app = Flask(__name__)



@app.route("/")
def main():
  username = "Username"
  return render_template("dashboard.html",username = username+"!!")






if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)`