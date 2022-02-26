const UserModel= require("../models/userModel")

const createBookInfo= async function (req, res) {
    let data= req.body
    let savedBooks= await UserModel.create(data)
    res.send({msg: savedBooks})
}

const getBookInfo= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBookInfo= createBookInfo
module.exports.getBookInfo= getBookInfo