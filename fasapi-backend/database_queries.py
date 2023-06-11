import requests

base_url = "https://wpddzvhmokvspeaundby.supabase.co/rest/v1"
access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZGR6dmhtb2t2c3BlYXVuZGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MDQxMDIsImV4cCI6MTk5OTE4MDEwMn0.hdQz4XWKv5lQ4ajjWV7bSLA7OZk-wbRnsALYg9BWMK4'
headers = {
    'apikey': f'{access_token}',
    'Authorization' : f'Bearer {access_token}'
}

def post_motorcycle(form_data):
    url = f'{base_url}/motorcycles'
    data = {"name": form_data.name, "brand": form_data.brand, "cc": form_data.cc, "year": form_data.year}
    try:
        resp = requests.post(url, data=data, headers=headers)
        if resp.status_code in [200, 201]:
            print(f'\n\nData from post_motorcycle func: {data}')
            return 200
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print('\n\nCould not make connection to supabase from post_motorcycle func\n\n')
            return 500

def get_a_moto():
    url = f'{base_url}/motorcycles?id=eq.3'

    try:
        resp = requests.get(url, headers=headers)
        if resp.status_code == 200:
            return resp.json()
        elif resp.stauts_code == 401:
            return 'Unauthorized request: 401'
        else:
            return f'Idk figure it out: {resp.status_code}'
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print('\n\nCould not make connection to supabase from get_a_moto func\n\n')
            return 500


def get_all_motorcycles():
    url = f'{base_url}/motorcycles?select=*'

    try:
        resp = requests.get(url, headers=headers)
        if resp.status_code == 200:
            return resp.json()
        elif resp.stauts_code == 401:
            return 'Unauthorized request: 401'
        else:
            return f'Idk figure it out: {resp.status_code}'
    except Exception as e:
        if type(e) == requests.exceptions.ConnectionError:
            print('\n\nCould not make connection to supabase from get_all_motorcycles func\n\n')
            return 500