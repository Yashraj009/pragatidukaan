import express from "express";
// we can use this as es6 module is type. it has been modified in package.json
//default importing is like 
// const express = require('express')
import dotenv from 'dotenv';
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res)=>{
    res.send("API is running");
})

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id",(req,res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    res.json(product)
})

app.listen(port,()=>{`API is running at port ${port}`})