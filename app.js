const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get ("/login", function(req,res){
    res.sendFile(path.join (__dirname, "/views/login.html"))
});
app.post("/login", (req,res) => {
    console.log(req.body);
res.redirect("/");
})

app.get ("/register", function(req,res){
    res.sendFile(path.join (__dirname, "/views/register.html"))
});
app.post("/register", (req,res) => {
    console.log(req.body);
res.redirect("/");
})


app.use(express.static(__dirname + '/public'));