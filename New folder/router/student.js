const express=require("express");
const router=new express.Router();
const Student =require("../modal/student")

router.post("/student",async (req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);

    }catch(e){
        res.status(400).send(e);

    }
})

router.get("/student",async(req,res)=>{
    try{
    const studentData=await Student.find();
    res.send(studentData);
    }catch(e){
        res.send(e);
    }
})

router.get("/student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData )
        }
    }catch(e){
        res.send(e);
    }
})

router.patch("/student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(updateStudent)
    }catch(e){
        res.status(400).send(updateStudent)
    }
})

router.delete("/student/:id",async(req,res)=>{
    try{
        const deleteStudent=await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent)
    }catch(e){
        res.send(500).send(e);
    }
})

module.exports=router;