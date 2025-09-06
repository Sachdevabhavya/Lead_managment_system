const jwt = require("jsonwebtoken")
const {secret, reset_secret} = require("../config/jwtConfig")

const auth_middleware = async(req,res,next) => {
    var token

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    else {
        return res.status(401).json(errorResponse("Access denied , no token" , 401))
    }

    try {
        console.log("token",token)
        const decoded = jwt.verify(token, secret)
        req.user = decoded
        console.log("decoded",decoded)
        next()
    } catch (error) {
        console.log(error)
    }
}

const forgot_pass_middleware = async (req,res,next) => {
    var {token} = req.params

    if(!token){        
        return res.status(401).json(errorResponse("Access denied , no token" , 401))
    }
    try {
        console.log("token",token)
        const decoded = jwt.verify(token, reset_secret)
        req.user = decoded
        console.log("decoded",decoded)
        next()
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    auth_middleware,
    forgot_pass_middleware
}