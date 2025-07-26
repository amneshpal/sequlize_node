const express = require('express')
const { dbConnection } = require('./config/db')
const { router } = require('./routes/route')
const  UserModel  = require('./model/userModel')
const app = express()

app.use(express.json())

app.use('/', router)

// UserModel.sync({force:true})

app.listen(4000, async () => {
    console.log('server is listen at port : 4000')
    await dbConnection()
})