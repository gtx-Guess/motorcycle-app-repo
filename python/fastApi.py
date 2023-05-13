from fastapi import FastAPI
import databaseQueries
app = FastAPI()

@app.get('/')
def home():
  return 'This is home page'

@app.get('/api/getMotos')
async def getMotosFrom():
    resp = databaseQueries.getMotorcyclesFromDb()
    return resp

@app.get('/api/getMoto')
def getMoto():
    motos = {
      "id": 4,
      "name": "Suzuki",
      "year": "2015",
      "cc": "750",
      "motoImage": '1GQNfUrMIK7uvfBlxgiLzr6mLd4Fnl3sg'
    }
    return motos
#uvicorn api2:app --reload