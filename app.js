const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080
const basicRouter = require('./routers/basicRoute')
const dbConnect = require('./utils/db')
const axios = require('axios')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

dbConnect()


app.use('/',basicRouter)
app.listen(PORT,()=>{
    console.log(`app is listening on the port ${PORT}`)
})
