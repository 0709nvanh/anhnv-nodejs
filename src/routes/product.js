import { add, getOne, List, remove, update } from '../controllers/product';

// const { Router} = require('express');
const { checkAuth, requiredSignin, isAuth } = require('../middleware/checkAuth')
import express from 'express';
const router = express.Router();


// get all
    router.get("/product", checkAuth, List)

    // get one
    router.get("/product/:id" , getOne)

    // create
    router.post("/product", requiredSignin, isAuth, add)

    // update
    router.put("/product/:id", checkAuth, update)

    // delete
    router.delete("/product/:id" , remove)

// module.exports = router;
export default router;