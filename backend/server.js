import express from "express";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
// we can use this as es6 module is type. it has been modified in package.json
//default importing is like
// const express = require('express')
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); // Connect to mongodb

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  `API is running at port ${port}`;
});
