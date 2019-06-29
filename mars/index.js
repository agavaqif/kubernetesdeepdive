const express = require('express')
const app = express()
const port = 3001;

const os = require('os');
let host = os.hostname();
app.get('/', (req, res) => res.send('Hello MARS! Hostname is :' + host));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))