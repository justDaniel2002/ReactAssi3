const User = require("../models/User");

const encodeToken = require('../configs/index').encodeToken


const signIn = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user)
        return res.status(404).json({ message: 'User not found' })

    var isValid = await user.isValidPassword(password)
    if (!isValid)
        return res.status(401).json({ message: 'Invalid password' })

    return res.status(200).json({ user })
}

const signUp = async (req, res, next) => {
    const newUser = new User(req.body)
    await newUser.save()
        .then((user) => {
            return res.status(200).json({ user })
        })
}

const secret = async (req, res, next) => {
    const user = req.user
    return res.status(200).json({ user })
}

const authGoogle = async (req, res, next) => {
    const user = req.user
    console.log(user)
    const token = encodeToken(user._id)
    res.setHeader('Authorization', token)
    return res.status(200).json({ user })
}

module.exports = {
    signIn,
    signUp,
    secret,
    authGoogle
}