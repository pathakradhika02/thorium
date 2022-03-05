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

const updateBookData = async function (req, res) {
  let publisherId= await publisherModel.find({publisherName:{$in:["HarperCollins", "Penguin"]}}).select({_id:1})

  let arr=[]
  arr=publisherId.map(x => x._id)

  let data= await bookModel.updateMany(
    {publisher:{$in:arr}},
    {$set: {isHardCover:true} },
    { new:true })  
  res.send(data)

}



const updateBookByRating = async function (req, res) {
    let authorrId= await authorModel.find({ rating :{$gt :3.5} }).select({_id:1})
  
    let arr=[]
    console.log(arr)
    arr=authorId.map(x => x._id)
    
    let data= await bookModel.updateMany(
      {author:{$in:arr}} ,
      {$inc : {price : + 10 } },
      { new:true })  
    res.send(data)
  
  }

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBookData = updateBookData
module.exports.updateBookByRating = updateBookByRating
