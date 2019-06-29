const express = require('express')
const bodyParser = require('body-parser');
const Blog = require("./blogModel");
var cors = require('cors')

const app = express()
app.use(cors())

const port = 8081
const mongoose = require('mongoose');

let connectionString = 'mongodb://vagif:vagif1988@ds335957.mlab.com:35957/bookapp'; //Use your string here
let mongoDB = process.env.MONGODB_URI || connectionString;

mongoose.connect(mongoDB, { useNewUrlParser: true }, (err) => {
    err ? console.log("Connection Error" + err) : console.log("Connected to DB");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/", (req, res) => {
    let newBlog = new Blog(
        {
            article: req.body.article,
            author: req.body.author
        }
    )
    newBlog.save();
    res.send("SAVED Whole thing");

});

app.get("/crush", (req, res) => {
    process.exit();
})


app.listen(port, () => console.log(`Write service listening on  ${port}!`))
