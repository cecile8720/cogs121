client_id = '<OWW16mQtRuHeIKf6X0SSDatK>'
client_secret = '<d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN>'
import requests
#picture = find a way to get the url here
params = {'url': picture, 'num_keywords': 10}
keywords = requests.get('https://api.everypixel.com/v1/keywords', params=params, auth=(client_id, client_secret)).json()
#quality = requests.get('https://api.everypixel.com/v1/quality', params=params, auth=(client_id, client_secret)).json()
quality = requests.get('https://api.everypixel.com/v1/quality_ugc', params=params, auth=(client_id, client_secret)).json()


# /keyword function- use GET and POST

with open(picture,'rb') as image:
    data = {'data': image}
    keywords = requests.post('https://api.everypixel.com/v1/keywords', files=data, auth=(client_id, client_secret)).json()

# /quality
#with open('image.jpg','rb') as image:
    #data = {'data': image}
    #quality = requests.post('https://api.everypixel.com/v1/quality', files=data, auth=(client_id, client_secret)).json()
    
# /quality_ugc
with open('image.jpg','rb') as image:
    data = {'data': image}
    quality = requests.post('https://api.everypixel.com/v1/quality_ugc', files=data, auth=(client_id, client_secret)).json()

# Error
    