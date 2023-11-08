const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017"
const mongoURI = "mongodb+srv://Tushar:0c2IyUfy52Rklq0s@inotebook.xatgygn.mongodb.net/?retryWrites=true&w=majority"
//add your own mongoURI to make it work on your device
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;