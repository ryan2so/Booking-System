const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://ryanso:Rsc19942329@cluster0.smwlf.mongodb.net/BookingSystem'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose