import requests

baseUrl = "https://wpddzvhmokvspeaundby.supabase.co/rest/v1"
access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZGR6dmhtb2t2c3BlYXVuZGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MDQxMDIsImV4cCI6MTk5OTE4MDEwMn0.hdQz4XWKv5lQ4ajjWV7bSLA7OZk-wbRnsALYg9BWMK4'
headers = {
    'apikey': f'{access_token}',
    'Authorization' : f'Bearer {access_token}'
}

def getMotorcycleFromDb():
    url = f'{baseUrl}/motorcycles?id=eq.3'
    resp = requests.get(url, headers=headers)

    if resp.status_code == 200:
        return resp.json()
    elif resp.stauts_code == 401:
        return 'Unauthorized request: 401'
    else:
        return f'Idk figure it out: {resp.status_code}'


def getMotorcyclesFromDb():
    url = f'{baseUrl}/motorcycles?select=*'
    resp = requests.get(url, headers=headers)

    if resp.status_code == 200:
        return resp.json()
    elif resp.stauts_code == 401:
        return 'Unauthorized request: 401'
    else:
        return f'Idk figure it out: {resp.status_code}'