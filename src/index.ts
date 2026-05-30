import express from "express";
import env from "./config/env.js";
import type{ Request,Response } from "express";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.route.js";

const app=express();

app.use(express.json())

app.use("/api/auth",authRouter)

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