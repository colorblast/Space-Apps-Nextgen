import os
from flask import Flask
import requests
import sys
import simplejson as json

app = Flask(__name__)

@app.route("/")
def hello():
    r = requests.get("http://eonet.sci.gsfc.nasa.gov/api/v2.1/events").text
    data = json.loads(r)
    sys.stdout.write(data)
    return "Hello world!"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)