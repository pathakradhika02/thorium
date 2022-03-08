const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const tokenMW = require("../middleware/token")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  register user
router.post("/users", userController.createUser  )

//  login user  
router.post("/login", userController.loginUser)

//  fetch data from DB
router.get("/users/:userId",tokenMW.checkToken , userController.getUserData)

//  Update data 
router.put("/users/:userId",tokenMW.checkToken , userController.updateUser)

//  delete data
router.delete("/users/:userId", tokenMW.checkToken , userController.deleteUser)


module.exports = router;