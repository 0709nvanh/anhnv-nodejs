// const express = require("express");
// const productRouter = require('./routes/product');

import express from "express";
import mongoose from 'mongoose';
import cors from 'cors'
// import { readdirSync } from 'fs';

import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import userRouter from "./routes/auth";

const app = express();

// Middleware
app.use(express.json());
app.use(cors())
// Route

app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', userRouter);


// connect database
mongoose.connect("mongodb://localhost:27017/nodejs")
        .then(() => {console.log("Connect thanh cong")})


// readdirSync('./routes').map(route => {
//   return app.use("/api", require(`./routes/${route}`))
// })
const PORT = 3004;

app.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});

// next cho phép chạy cv gì đó ở middleware
// next thực thi những cv
