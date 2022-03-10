const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body
    if (Object.keys(data).length != 0) {
      let savedData = await BookModel.create(data)
      res.status(401).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  }
  catch (error) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: error.message })
  }

};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (!userName) res.status(400).send({ error: "userName must be present in request body" })
    if (!password) res.status(400).send({ error: "password must be present in request body" })

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign({ userId: user._id.toString() }, "secuiretyKeyToCheckToken");
   
    res.status(200).send({ status: true, data: token });
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
  }
};


const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    if (!userId) res.status(400).send({ error: "userId must be present in params" })

    let userDetails = await userModel.findById(userId);

    if (!userDetails) {
      return res.status(200).send({ status: false, msg: "user doesn't exists" });
    }

    res.send({ status: true, data: userDetails });
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
  }
};


const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let data = req.body

    if (!userId) res.status(400).send({ error: "userId must be present in params" })
    if (!data) res.status(400).send({ error: "Some data to update must be present in body" })

    let user = await userModel.findOneAndUpdate({ _id: userId }, {});

    if (!user) {
      return res.status(200).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
  }

};


const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId

    if (!userId) res.status(400).send({ error: "userId must be present in params" })
    const user = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDelete: true } }, { new: true })

    res.status(200).send({ deletedUser: user })
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ error : error.message})
  }


}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
