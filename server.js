// Node.js + Express backend

console.log('hello');

const express = require('express');
const app = express();

app.use(express.static('static_files'));

const fakeDatabase = {
}


app.listen(3000, () => {
    console.log('server started');

});
