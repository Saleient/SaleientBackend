import express from "express";
import env from "./config/env.js";
import type{ Request,Response } from "express";
const app=express();



app.get("/",async(req:Request,res:Response)=>{
    res.send("Saleient Backend Server is running")
})

app.listen(env.PORT,()=>{
    console.log(`Server is running on port ${env.PORT}`)
})