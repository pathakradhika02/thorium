const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")

router.post("/createBook", controller.createBook  )

router.post("/createAuthor", controller.createAuthor)

router.get("/bookByChetanBhagat", controller.bookByChetanBhagat)

router.get("/twoStateUpdate", controller.twoStateUpdate)

router.get("/findBookAuthorByPrice", controller.findBookAuthorByPrice)

module.exports = router;