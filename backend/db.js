const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"
//add your own mongoURI to make it work on your device
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;