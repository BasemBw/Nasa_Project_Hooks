const express = require('express')
const mongoose = require('mongoose')
const api = require('./routes/api')
const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost/Nasa_Events")

app.use('/',api)

const port = 7070
app.listen(port)

