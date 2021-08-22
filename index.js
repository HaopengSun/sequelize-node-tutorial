const express = require('express')
const exphbs = require('express-handlebars')
const bodyPaser = require('body-parser')
const path = require('path')

const db = require('./config/database')

db.authenticate().then(() => console.log('db connected')).catch(err => console.log(err))

const app = express()

app.get('/', (req, res) => res.send('index'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))