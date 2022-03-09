const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authenticationMW = require("../middleware/authentication")
const authorizationMW = require("../middleware/authorization")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  register user
router.post("/users", userController.createUser  )

//  login user  
router.post("/login", userController.loginUser)

//  fetch data from DB
router.get("/users/:userId", authenticationMW.authentication, authorizationMW.authorization , userController.getUserData)

//  Update data 
router.put("/users/:userId", authenticationMW.authentication, authorizationMW.authorization , userController.updateUser)

//  delete data
router.delete("/users/:userId",authenticationMW.authentication, authorizationMW.authorization , userController.deleteUser)


module.exports = router;