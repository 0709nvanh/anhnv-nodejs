// const express = require("express");
// const productRouter = require('./routes/product');

import express from "express";
import productRouter from "./routes/product";
// import mongoose from 'mongoose'
import mongoose from 'mongoose';


const app = express();

// Middleware
app.use(express.json());

// Route
app.use('/api', productRouter)

// connect database
mongoose.connect("mongodb://localhost:27017/nodejs")
        .then(() => {console.log("Connect thanh cong")})

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});

// next cho phép chạy cv gì đó ở middleware
// next thực thi những cv
