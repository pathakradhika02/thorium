const { count } = require("console")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({data : savedData})
}

const bookList = async function (req, res) {
    let allBooks = await bookModel.find().select( { bookName : 1 , authorName : 1 , _id:0})
    res.send({data : allBooks})
}


const getBooksInYear = async function (req, res) {
    let newYear = req.query.year
    let savedData = await bookModel.find({ year :{$eq :newYear} })
    res.send({data : savedData})
}

const getPerticularBook = async function (req, res) {
    let name= req.query.bookName
    let author = req.query.authorName
    let price = req.query.prices
    let year_ = req.query.year
    let tag = req.query.tags
    let page = req.query.pages
    let stock = req.query.stockAvailable

    let data = req.body

     let savedData= await bookModel.find( { $or : [ {bookName : name} , 
                                                    {authorName : author} ,
                                                    {prices: price} ,
                                                    {year : year_} ,
                                                    {tags : tag} ,
                                                    {pages : page} ,
                                                    {stockAvailable : stock}
     ]})

     res.send({msg: savedData})
}

const getXINRBooks = async function (req, res) {
    let indPrice = bookModel.indianPrice
    let savedData= await bookModel.find({ indPrice : {$in : [ "100INR" , "200INR" ,"500INR" ]}})
    res.send({msg: savedData})
}

 const getrandomBooks = async function (req, res) {
     let savedData= await bookModel.findOne({ $or : [ {pages : { $gt : 500}} , 
                                            { stockAvailable :{ $eq : true }}]} )
     res.send({msg: savedData})
 }


module.exports.createBook= createBook
module.exports.bookList = bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getPerticularBook= getPerticularBook
module.exports.getXINRBooks= getXINRBooks
module.exports.getrandomBooks= getrandomBooks
