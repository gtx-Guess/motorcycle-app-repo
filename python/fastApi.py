from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import databaseQueries
app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get('/')
def home():
  return 'This is home page'

@app.get('/api/getMotos')
async def getMotosFrom():
    resp = databaseQueries.getMotorcyclesFromDb()
    return resp

@app.get('/api/getMoto')
async def getMotoFromDb():
  resp = databaseQueries.getMotorcycleFromDb()
  return resp[0]

@app.get('/api/staticMoto')
def getMoto():
    motos = {
      "id": 4,
      "name": "Suzuki",
      "year": "2015",
      "cc": "750",
      "motoImage": '1GQNfUrMIK7uvfBlxgiLzr6mLd4Fnl3sg'
    }
    return motos
#uvicorn fastApi:app --reload