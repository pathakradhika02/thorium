const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.post("/createPublisher", publisherController.createPublisher  )

router.post("/createBook", bookController.createBook  )

router.post("/createAuthor", authorController.createAuthor)

router.get("/getBooksData", bookController.getBooksData)

module.exports = router;