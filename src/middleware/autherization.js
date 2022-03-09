const jwt = require("jsonwebtoken");

const auth = async function ( req , res , next ) {
    let isToken = req.headers["x-auth-token"]
    if ( !isToken ) {
        res.send({ status: false, msg: "token must be present" });
    }
 
    let decodedToken = jwt.verify(isToken, "secuiretyKeyToCheckToken");
    if ( !decodedToken ) {
        res.send({ status: false, msg: "token is invalid" });
    }

    let userId = req.params.userId

    if ( decodedToken.userId != userId ) {
        res.send({ error : " LogedIn user is not authorize to change with requested userid"})
    }
    
    next();

}

module.exports.auth = auth