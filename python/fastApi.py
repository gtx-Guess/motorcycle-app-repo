from fastapi import FastAPI
from pydantic import BaseModel
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

'''
The class below creates an api object type that inherts from the "BaseModel" class,
in this case its creating a form data object type that the "/submit" endpoint will be expecting
'''
class FormData(BaseModel):
    brand_type: str
    engine_size: int
    moto_year: int
    moto_name: str

@app.post('/submit')
async def formSubmission(form_data: FormData):
  print("endpoint hit!")
  # brand_type = form_data.brand_type
  print(f"Form submission data from react: {form_data}")
  return {"message" : "Form submitted successfully"}


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