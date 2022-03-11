const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  CO-WIN
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict", CowinController.getByDistrict)

//  WEATHER
router.get("/weather" , weatherController.weatherofLondon )
router.get("/weather/getTempLondon",weatherController.getTempLondon)
router.get("/weather/sort", weatherController.sortCityTemp)


//  meme 
router.get("/getMemes" , memeController.getmemes)
router.post("/createMeme", memeController.createMeme)


module.exports = router;