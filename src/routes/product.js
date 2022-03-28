import { add, getOne, List, remove, update } from '../controllers/product';

// const { Router} = require('express');
const { checkAuth, requiredSignin, isAuth, isAdmin } = require('../middleware/checkAuth')
import express from 'express';
import { userById } from '../controllers/user';
const router = express.Router();


// get all
    router.get("/product", checkAuth, List)

    // get one
    router.get("/product/:id" , getOne)

    // create
    router.post("/product/:userId", requiredSignin, isAuth, isAdmin, add)

    // update
    router.put("/product/:id", checkAuth, update)

    // delete
    router.delete("/product/:id" , remove)

    router.param("userId", userById)
// module.exports = router;
export default router;