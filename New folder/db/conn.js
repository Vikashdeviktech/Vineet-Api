const mongoose =require("mongoose");

const mongoURI='mongodb+srv://devikTech:9931320688v@cluster0-koncr.mongodb.net/student-api?retryWrites=true&w=majority';

mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }

).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log('no connection')
})