from flask import Flask
from flask_cors import CORS
import exampleThing

app = Flask(__name__)
CORS(app)

@app.route('/api/motos', methods=['GET'])
def getMotos():
    motos = {
      "id": 4,
      "name": "Suzuki",
      "year": "2015",
      "cc": "750",
      "motoImage": '1GQNfUrMIK7uvfBlxgiLzr6mLd4Fnl3sg'
    }
    return motos

@app.route('/api/motos2', methods=['GET'])
def getMotos2():
        motos2 =  [{
            "id": 4,
            "name": "Suzuki",
            "year": "2015",
            "cc": "750",
            "motoImage": '1GQNfUrMIK7uvfBlxgiLzr6mLd4Fnl3sg'
            },  
            {    
            "id": 6,    
            "motoImage": "2AIIoKjQ_1mrZwlbPlBtkLnpIc1n7Vup8",    
            "name": "Kawasaki",    
            "year": "2020",
            "cc": "300"  
            },  
            {    
            "id": 9,    
            "motoImage": "3q3KjWwjoPY2vBh0EbnzgOyOjK-l-9vIK",    
            "name": "Harley Davidson",    
            "year": "2018",
            "cc": "500"  
            },  
            {    
            "id": 12,    
            "motoImage": "4eZKWXlFhZYt_oQGtJWsejv5QDIk-DEI6",    
            "name": "Honda",    
            "year": "2019",
            "cc": "125"  
        }]
        return motos2

@app.route('/api/queryDb', methods=['GET'])
def getMotosFromDatabase():
    resp = exampleThing.queryDb()
    return resp

if __name__ == '__main__':
    app.run(debug=True)
    queryDb()