from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import database_queries
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
class Motorcycle(BaseModel):
    brand: str
    cc: int
    year: int
    name: str
'''
end class
'''

@app.get('/')
def home():
  return 'This is home page'

@app.post('/api/createMoto')
async def form_submission(form_data: Motorcycle):
  print(f"Form submission data from react: {form_data}")
  resp = database_queries.post_motorcycle(form_data)
  if resp == 200:
    message = 'Successful post, status code: 200'
  else:
    message = f'Something went wrong, status code: {resp}'
  return {"message" : message}


@app.get('/api/getMotos')
async def get_all_motos():
    resp = database_queries.get_all_motorcycles()
    return resp

@app.get('/api/getMoto')
async def get_specific_moto():
  resp = database_queries.get_specific_motorcycle()
  return resp[0]

#python3 -m uvicorn fast_api:app --reload