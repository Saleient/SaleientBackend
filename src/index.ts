import express from "express";
import env from "./config/env.js";
import type{ Request,Response } from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import { auth } from "./lib/auth.js";
import cors from "cors"
import { toNodeHandler } from "better-auth/node";
const app=express();

app.use(express.json())
app.use(cors({
  origin:["http://localhost:5173"],
  methods:["GET",'POST',"PUT","DELETE","PATCH"],
  credentials:true
}))
app.all("/api/auth/*path",toNodeHandler(auth))

app.get("/",async(req:Request,res:Response)=>{
    res.send("Saleient Backend Server is running")
})

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use(errorHandler);


app.listen(env.PORT,()=>{
    console.log(`Server is running on port ${env.PORT}`)
})