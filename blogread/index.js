const express = require('express')
const bodyParser = require('body-parser');
const Blog = require("./blogModel");
var cors = require('cors')

const app = express()
app.use(cors())

const mongoose = require('mongoose');

let connectionString = 'mongodb://user:pass@ds335957.mlab.com:35957/bookapp'; //Use your string here
let mongoDB = process.env.MONGODB_URI || connectionString;

mongoose.connect(mongoDB, { useNewUrlParser: true }, (err) => {
    err ? console.log("Connection Error") : console.log("Connected to DB");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    Blog.find((err, books) => {
        if (err) return "ERROR";
        res.send(books);
    })
})

const port = 8080
app.listen(port, () => console.log(`Read service listening on  ${port}!`))
