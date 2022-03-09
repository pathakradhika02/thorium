const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMW = require("../middleware/autherization")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  register user
router.post("/users", userController.createUser  )

//  login user  
router.post("/login", userController.loginUser)

//  fetch data from DB
router.get("/users/:userId", authMW.auth , userController.getUserData)

//  Update data 
router.put("/users/:userId", authMW.auth , userController.updateUser)

//  delete data
router.delete("/users/:userId", authMW.auth , userController.deleteUser)


module.exports = router;