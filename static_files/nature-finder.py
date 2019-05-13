client_id = '<OWW16mQtRuHeIKf6X0SSDatK>'
client_secret = '<d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN>'
params = {'url': 'http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg', 'num_keywords': 10}
import requests
keywords = requests.get('https://api.everypixel.com/v1/keywords', params=params, auth=(client_id, client_secret)).json()



# /keyword function- use GET and POST
with open('image.jpg','rb') as image:
    data = {'data': image}
    keywords = requests.post('https://api.everypixel.com/v1/keywords', files=data, auth=(client_id, client_secret)).json()

# /quality
with open('image.jpg','rb') as image:
    data = {'data': image}
    quality = requests.post('https://api.everypixel.com/v1/quality', files=data, auth=(client_id, client_secret)).json()
    
# /quality_ugc
with open('image.jpg','rb') as image:
    data = {'data': image}
    quality = requests.post('https://api.everypixel.com/v1/quality_ugc', files=data, auth=(client_id, client_secret)).json()

# Error
    