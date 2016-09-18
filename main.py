import os
from flask import Flask, render_template
import requests
import sys
import simplejson as json

app = Flask(__name__, static_url_path='')

@app.route("/")
def hello():
    r = requests.get("http://eonet.sci.gsfc.nasa.gov/api/v2.1/events").text
    data = json.loads(r)
    events = []
    for i in range(len(data['events'])):
        events.append({'title':data['events'][i]['title'],'date':data['events'][i]['geometries'][-1]["date"]})
    return render_template('main.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)