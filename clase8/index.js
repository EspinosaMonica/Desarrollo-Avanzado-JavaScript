const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/static'));

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.listen(port);
console.log(`Servidor corriendo en http://localhost:${port}`);
