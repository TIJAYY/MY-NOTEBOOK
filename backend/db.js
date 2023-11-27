const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017"
const mongoURI = "mongodb+srv://tushar:D6lES97EtpA6B2nU@cluster0.uskb5cb.mongodb.net/"
//add your own mongoURI to make it work on your device
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;