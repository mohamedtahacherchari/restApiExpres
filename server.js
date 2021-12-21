const express = require('express')

const server=express()
require('dotenv').config()
const connectDB=require('./config/connectDB')
const Users=require('./models/User') 
server.use(express.json())

connectDB() 


server.post('/Users/newUser', async(req,res)=>{
    const newUser= new Users(req.body)
    const newData =await newUser.save()  
    res.json({message:"user added successfully", data: newData })})

server.get('/Users', async(req,res)=>{
    const allUsers = await Users.find();
    res.json({message :"all users", data:allUsers})
})

server.put('/Users/:id', async(req,res)=>{
    await Users.findByIdAndUpdate(req.params.id,{$set:{...req.body}})
    const myuser = await Users.findById(req.params.id)
     res.json({message:"User updated", data:myuser})
})

server.delete('/Users/:id', async(req,res)=>{
    const userDeleted = await Users.findByIdAndDelete(req.params.id)
    res.json({message : "user deleted successfully", data: userDeleted})
})
PORT=process.env.PORT||2000
server.listen(PORT, (err)=> err? console.error(err):console.log(`server listening on port ${PORT}`))