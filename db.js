const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://candykanya25:Zongwana%2311@cluster0.q37gfof.mongodb.net/mern-rooms'


mongoose.connect(mongoURL, {useUnifiedTopology : true , useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error' , () =>{
console.log('Mongo DB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose