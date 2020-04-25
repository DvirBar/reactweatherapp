from flask import Flask, jsonify 
from flask_cors import CORS
from flask_restful import Api, Resource
from app.data import weather_data
import requests

app = Flask(__name__, instance_relative_config=True)
cors = CORS(app)

app.config.from_pyfile('config.py')

apikey = app.config['REACT_APP_WEATHER_API_KEY']

api = Api(app)

class WeatherAPI(Resource): 
    def get(self):
        try:
            # payload = {'q': 'London,uk', 'APPID': apikey, 'units': 'metric' }
            # response = requests.get('http://api.openweathermap.org/data/2.5/weather', params=payload)
            # data = response.json()
            result = jsonify(weather_data)
            return result
        except Exception:
            return Exception


api.add_resource(WeatherAPI, '/weather')
