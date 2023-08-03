import requests
import os
import re
import json
from dotenv import load_dotenv
load_dotenv()

api_url = os.getenv("NINJA_API_URL")
headers = { "X-Api-Key": os.getenv("NINJA_API_KEY") }

def get_moto_spec_data(moto_params, run="first"):
    spec_data = {}
    try:
        resp = requests.get(api_url, headers=headers, params=moto_params)
        moto_data = resp.json()

        if moto_data and moto_data[0]["make"].lower() == moto_params["make"].lower():
            print(f"Got motorcycle data on {run} run")
            moto_data = moto_data[0]
            hp = moto_data.get("power", None)
            mpg = moto_data.get("fuel_consumption", None)
            engine = moto_data.get("engine", None)
            torque = moto_data.get("torque", None)
            seat_height = moto_data.get("seat_height", None)
            fuel_capacity = moto_data.get("fuel_capacity", None)

            if not hp: pass
            else: spec_data["hp"] = f"{moto_data['power'].split(' ')[0]} HP"

            if not engine: pass
            else: spec_data["engine"] = moto_data["engine"]

            if not torque: pass
            else: 
                pattern = r"(\d+\.\d+ Nm)"
                match = re.search(pattern, torque)
                temp_torque = match.group(1) if match else None
                if temp_torque: spec_data["torque"] = temp_torque

            if not mpg: pass
            else:
                pattern = r"(\d+\.\d+ mpg)"
                match = re.search(pattern, mpg)
                temp_mpg = match.group(1).upper() if match else None
                if temp_mpg: spec_data["mpg"] = temp_mpg
            
            if not fuel_capacity: pass
            else:
                pattern = r"\(([\d.]+) US gallons\)"
                match = re.search(pattern, fuel_capacity)
                gallons = match.group(1) if match else None
                if gallons: spec_data["fuel_capacity"] = f"{gallons} gallons"

            if not seat_height: pass
            else:
                pattern = r"(\d+\.\d+ inches)"
                match = re.search(pattern, seat_height)
                temp_seat_height = match.group(1) if match else None
                if temp_seat_height: spec_data["seat_height"] = temp_seat_height

            return spec_data

        else:
            print(f"Empty response from ninja api on {run} run")
            if run == "second":
                print(f"Did not find any data for: {moto_params['make']} {moto_params['model']}")
                return
            try:
                del moto_params["year"]
                return get_moto_spec_data(moto_params, "second")
            except Exception as e:
                print(e)

    except Exception as e:
        print(e)
