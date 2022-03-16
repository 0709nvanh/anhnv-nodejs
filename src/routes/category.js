// import express from "express";
import express from "express";
import { add, getOne, List } from "../controllers/category";

const { Router } = require('express');
const { checkAuth } = require('../middleware/checkAuth')

// const router = express.Router();
const router = express.Router()

router.get("/categories", checkAuth, List)

// get one
router.get("/category/:slug", getOne)

// create
router.post("/category", checkAuth, add)

// update
// router.put("/category/:id", checkAuth, update)

// delete
// router.delete("/category/:id" , remove)

// module.exports = router;
export default router
