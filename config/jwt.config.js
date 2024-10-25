const jwt = require("jsonwebtoken");
const config = require("./config");

const generateToken = (user) => {
  return jwt.sign({
    sub: user._id
  }, config.JWT_SECRET, {
    expiresIn: "60s"
  })
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, config.JWT_SECRET)
  } catch (error) {
    return null
  }
}

module.exports = {
  generateToken,
  verifyToken
}


