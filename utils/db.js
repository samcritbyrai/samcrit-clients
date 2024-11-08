const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
       await mongoose.connect('mongodb+srv://rahulrai:12345679@samcritclients.0glby.mongodb.net/',{
       })
       console.log('database connected successfully')
    } catch(err){
        console.log('database connection error')
    }
}

module.exports = connectDB