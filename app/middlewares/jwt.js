const jwt = require('jsonwebtoken')

const generateToken = ({ _id, email, name }, secret, role) => {
    const token = jwt.sign({
        id: _id,
        email,
        role,
        name
    }, secret, {
        expiresIn: '24h'
    })
    return token
}

const verifyToken = (token, secret) => {
    try {
        const decoded = jwt.verify(token, secret)
        return decoded
    } catch (error) {
        throw new Error("Invalid token")
    }
}


module.exports = {
    generateToken,
    verifyToken
}