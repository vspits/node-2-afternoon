const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./products_controller')

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err))

app.get(`/api/products/:id`, controller.getOne)
app.get(`/api/products`, controller.getAll)
app.put(`/api/products/:id`, controller.update)
app.post(`/api/products`, controller.create)
app.delete(`/api/products/:id`, controller.delete)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Port ${port} is werking vry hard yo`))