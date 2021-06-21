const express = require("express");
const app=express();
const port=process.env.PORT|| 8000;
require("../db/conn")
const Student = require("../router/student");

app.use(express.json())
app.use(Student);

app.listen(port,()=>{
    console.log(`The app is listening at ${port}` );
})