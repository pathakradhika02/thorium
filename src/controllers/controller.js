const { count } = require("console")
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data = req.body
    let savedBook = await bookModel.create(data)
    res.send({data : savedBook})
}

const createAuthor = async function (req, res) {
    let data= req.body
    let savedAuthor = await authorModel.create(data)
    res.send({data : savedAuthor})
}

const bookByChetanBhagat = async function (req, res) {
    let n_author = await authorModel.find( {authorName : "Chetan Bhagat" })
  
    console.log(typeof(id))
    let book = await bookModel.find( {author_Id : n_author[0].author_Id} ).select({bookName : 1 , _id : 0})

    res.send({data : book})
}

const twoStateUpdate = async function (req, res) {
    let book = await bookModel.findOneAndUpdate(
                                { bookName : "Two States"} ,
                                { prices : "100rs" } ,
                                { new: true }
    )
    
    let n_book = await bookModel.find( {bookName : "Two States" })
    let result = await authorModel.find( {author_Id : n_book[0].author_Id} ).select({authorName : 1 , _id : 0})

    res.send([{author : result } , { data : book}])
}

const findBookAuthorByPrice = async function (req, res) {
    
    let book = await bookModel.find({ prices :{$gte : 50, $lte : 100 }}).select({author_Id : 1 , _id : 0})
    const id = book.map( n_Id => n_Id.author_Id)
    let result = []
    for(let i=0 ;i<id.length ; i++){
        let a = id[i]
        let author = await authorModel.find({ author_Id : a}).select({authorName:1 , _id:0})
        result.push(author)
    }

    const authorName = result.flat()
    res.send({ data : authorName})
}



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookByChetanBhagat = bookByChetanBhagat
module.exports.twoStateUpdate = twoStateUpdate
module.exports.findBookAuthorByPrice = findBookAuthorByPrice