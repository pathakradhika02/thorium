const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")


router.get("/test-me1", function (req, res) {
    res.send("I am 1st API")
})

router.get("/test-me2", function (req, res) {
    res.send("I am 2nd API")
})

router.get("/test-me3", function (req, res) {
    res.send("I am 3rd API")
})

router.get("/test-me4", function (req, res) {
    res.send("I am 4th API")
})

router.get("/test-me5", function (req, res) {
    res.send("I am 5th API")
})


module.exports = router;