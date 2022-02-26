const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.post("/createBookInfo", UserController.createBookInfo  )

router.get("/getBookInfo", UserController.getBookInfo)

module.exports = router;