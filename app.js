const express = require('express');
const app = express();
const path = require('path');


app.listen(8000, () => {
    console.log('Servidor levantado en el puerto 8000');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.use(express.static(__dirname + '/public'));