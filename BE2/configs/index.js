

//jwt config
const jwt = require("jsonwebtoken")


const encodeToken = (userID) =>{
    return jwt.sign({
        tss: 'Nguyen Thanh',
        sub: userID,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+3)
    }, process.env.JWT_SECRET)
}
 

module.exports = {
    encodeToken,
    jwt_secret: process.env.JWT_SECRET
}