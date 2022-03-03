const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorData = await AuthorModel.create(author)
    res.send({data: authorData})
}

module.exports.createAuthor= createAuthor