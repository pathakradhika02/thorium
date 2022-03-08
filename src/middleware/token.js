const jwt = require("jsonwebtoken");

const checkToken = async function ( req , res , next ) {
    let isToken = req.headers["x-auth-token"]
    
    if (!isToken) {
        res.send({ status: false, msg: "token must be present" });
    }

    let decodedToken = jwt.verify(isToken, "toCheckToken");

    if (!decodedToken) {
        res.send({ status: false, msg: "token is invalid" });
    }
    
    next();

}

module.exports.checkToken = checkToken