const express = require('express')
var multer = require('multer')
var upload = multer({dest:'gs://collegeburnouts.appspot.com/'})
const app = express() 


const param = {'url': 'http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg', 'num_keywords': 10}

/*To get keywords*/
request.get('https://api.everypixel.com/v1/keywords', 'param'.auth('<OWW16mQtRuHeIKf6X0SSDatK>', '<d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN>'));

const keyword = requests.post('https://api.everypixel.com/v1/keywords');
/*with open('image.jpg','rb') as image:
    data = {'data': image}
    keywords = requests.post('https://api.everypixel.com/v1/keywords', files=data, auth=(client_id, client_secret)).json()*/



//start the server at URL: http://localhost:8080/
app.listen(8080, () => {
    console.log('Server started at http://localhost:8080/');
});