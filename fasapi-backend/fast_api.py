from fastapi import FastAPI, UploadFile, File
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

"""
The class below creates an api object type that inherts from the "BaseModel" class,
in this case its creating a form data object type that the "/submit" endpoint will be expecting
"""
class Motorcycle(BaseModel):
    brand: str
    cc: int
    year: int
    name: str
    imageLink: str
"""
end class
"""


@app.get("/")
def home():
    return "This is home page"

@app.put('/api/updateMoto')
async def updateMotorcycle(data: dict):
    print(data["id"])
    resp = database_queries.update_moto(data)
    return resp

@app.delete("/api/deleteMoto/{moto_id}")
async def deleteMotorcycle(moto_id: int):
    print(f'got moto for deleteing: {moto_id}')
    resp = database_queries.delete_moto(moto_id)
    return resp


@app.post("/api/createMoto")
async def form_submission(moto: Motorcycle):
    resp = database_queries.post_motorcycle(moto)
    if resp == 200:
        data = {"response": "Successful post", "status_code": 200}
    else:
        data = {"response": "Something went wrong", "status_code": resp}
    return data


@app.get("/api/getMotos")
async def get_all_motos():
    resp = database_queries.get_all_motorcycles()
    return resp


# @app.get("/api/getMoto")
# async def get_specific_moto():
#     resp = database_queries.get_a_moto()
#     return resp[0]


# python3 -m uvicorn fast_api:app --reload
