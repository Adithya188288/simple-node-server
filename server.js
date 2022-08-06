const express = require('express');
const { port } = require('./config');
const app = express();
const path = require('path');

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => console.log('server started in port ', + port ));