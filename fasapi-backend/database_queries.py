import requests
import os
from dotenv import load_dotenv
load_dotenv()

BASE_URL = os.getenv("SUPA_BASE_URL")
ACCESS_TOKEN = os.getenv("SUPA_ACCESS_TOKEN")
HEADERS = {"apikey": f"{ACCESS_TOKEN}", "Authorization": f"Bearer {ACCESS_TOKEN}"}


def update_moto(moto_data):
    url = f"{BASE_URL}?id=eq.{moto_data.get('id')}"
    data = {}
    if moto_data.get('name'):
        data["name"] = moto_data.get('name')
    if moto_data.get('brand'):
        data["brand"] = moto_data.get('brand')
    if moto_data.get('cc'):
        data["cc"] = moto_data.get('cc')
    if moto_data.get('year'):
        data["year"] = moto_data.get('year')
    if moto_data.get('imageLink'):
        moto_data["imageLink"] = moto_data.get('imageLink')
    try:
        resp = requests.patch(url, data=data, headers=HEADERS)
        if resp.status_code in [200, 201]:
            print(f"\n\nMotorcycle was updated! Moto id: {moto_data.get('id')}")
            return 200
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print(
                "\n\nCould not make connection to supabase from post_motorcycle func\n\n"
            )
            return 500

def delete_moto(moto_id):
    print(f'deleting moto: {moto_id}')
    url = f"{BASE_URL}?id=eq.{moto_id}"
    try:
        resp = requests.delete(url, headers=HEADERS)
        if resp.status_code in [200, 201]:
            print(f"\n\nMotorcycle was deleted! Moto id: {moto_id}")
            return 200
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print(
                "\n\nCould not make connection to supabase from post_motorcycle func\n\n"
            )
            return 500

def post_motorcycle(motorcycle):
    url = BASE_URL
    data = {
        "name": motorcycle.name,
        "brand": motorcycle.brand,
        "cc": motorcycle.cc,
        "year": motorcycle.year,
        "imageLink": motorcycle.imageLink,
    }
    try:
        resp = requests.post(url, data=data, headers=HEADERS)
        if resp.status_code in [200, 201]:
            print(f"\n\nData from post_motorcycle func: {data}")
            return 200
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print(
                "\n\nCould not make connection to supabase from post_motorcycle func\n\n"
            )
            return 500


def get_a_moto():
    url = f"{BASE_URL}?id=eq.3"
    try:
        resp = requests.get(url, headers=HEADERS)
        if resp.status_code == 200:
            return resp.json()
        elif resp.stauts_code == 401:
            return "Unauthorized request: 401"
        else:
            return f"Idk figure it out: {resp.status_code}"
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print("\n\nCould not make connection to supabase from get_a_moto func\n\n")
            return 500


def get_all_motorcycles():
    url = f"{BASE_URL}?select=*"
    try:
        resp = requests.get(url, headers=HEADERS)
        if resp.status_code == 200:
            return resp.json()
        elif resp.stauts_code == 401:
            return "Unauthorized request: 401"
        else:
            return f"Idk figure it out: {resp.status_code}"
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print(
                "\n\nCould not make connection to supabase from get_all_motorcycles func\n\n"
            )
            return 500
