const express = require('express')
const multer = require('multer')
const upload = multer({dest:'https://firebasestorage.googleapis.com/v0/b/collegeburnouts.appspot.com/o/'})
const app = express() 
const request = require('request')

const imgURL = //need to pull the url from firebase and or from what the html pulls in

app.post('')
//the url needs to be able to change, https://... + url + @api...
request("https://OWW16mQtRuHeIKf6X0SSDatK:d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN@api.everypixel.com/v1/keywords?url=http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg&num_keywords=10",
function (error, response, body) {
    console.log(body);
    const result = JSON.parse(body);
    console.log(result);
});

const param = {'url': 'https://firebasestorage.googleapis.com/v0/b/collegeburnouts.appspot.com/o/26863598b8bec4c49bea8cf6f805002d.jpg?alt=media&token=2f8fa8c5-78c5-48ee-a4d1-84d9f9eae4a0', 'num_keywords': 10}

app.listen(8080, () => {
    console.log('Server started at http://localhost:8080/');
 });
 

//curl --user "OWW16mQtRuHeIKf6X0SSDatK:d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN" "https://api.everypixel.com/v1/keywords?url=http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg&num_keywords=10"

//curl  "https://OWW16mQtRuHeIKf6X0SSDatK:d7AMBj94Jj3VZSWNpuIgd6vsr4lDqqSwwoTSLPYVNrxmuVWN@api.everypixel.com/v1/keywords?url=http://image.everypixel.com/2014.12/67439828186edc79b9be81a4dedea8b03c09a12825b_b.jpg&num_keywords=10"