const jwt = require("jsonwebtoken");

const authorization = async function ( req , res , next ) {
    let isToken = req.headers["x-auth-token"]
 
    let decodedToken = jwt.verify(isToken, "secuiretyKeyToCheckToken");

    let userId = req.params.userId

    if ( decodedToken.userId != userId ) {
        res.send({ error : " LogedIn user is not authorize to change with requested userid"})
    }
    
    next();

}

module.exports.authorization = authorization