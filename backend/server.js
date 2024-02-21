import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
// we can use this as es6 module is type. it has been modified in package.json
//default importing is like 
// const express = require('express')
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); // Connect to mongodb

const app = express();

app.get('/', (req, res)=>{
    res.send("API is running");
})

app.use('/api/products', productRoutes);

app.listen(port,()=>{`API is running at port ${port}`})