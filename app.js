const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.use(express.static(__dirname + '/public'));