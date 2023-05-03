from flask import Flask
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)


@app.route("/api")
def index():
    return {"text": "flask app"}
