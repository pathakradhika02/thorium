const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    const book = req.body
    const a_Id = req.body.author
    const p_Id = req.body.publisher

    const isAuthor = await authorModel.find({ _id : a_Id }).select({ _id : 1})
    const ispublisher = await publisherModel.find({ _id : p_Id }).select({ _id : 1})

    if ( isAuthor.length > 0  ) {
        if (ispublisher.length > 0  ) {
            const bookData = await bookModel.create(book)
            res.send({ data : bookData })
        } else {
            res.send({ error : "Invalid Publisher Id "})
        }
    } else {
        res.send({ error : "Invalid Author Id"})
    }

}




const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData