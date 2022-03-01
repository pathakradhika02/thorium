const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getPerticularBook", BookController.getPerticularBook)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getrandomBooks", BookController.getrandomBooks)

module.exports = router;