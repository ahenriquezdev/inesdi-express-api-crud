const { verifyToken } = require("../config/jwt.config");

const authMiddleware = async (req, res, next) => {

  const token = req.headers.cookie?.split("=")[1];

  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized"
    })
  }

  const decoded = verifyToken(token)

  if (!decoded) {
    return res.status(401).send({
      success: false,
      message: "Invalid or expired token provided."
    })
  }
  next();
}

module.exports = authMiddleware;
