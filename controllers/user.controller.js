const User = require("../models/user.model");
const { generateToken } = require("../config/jwt.config");
const config = require("../config/config");

const getUsers = (req, res) => {

  User.find({})
    .then((users) => {

      return res.status(200).send({
        succcess: true,
        message: "Users retrieved successfully",
        data: users
      })
    })
}
const addUser = (req, res) => {

  User.create(req.body)
    .then((user) => {

      let url = `http://localhost:${config.PORT}/api/users/verify/${user._id}`

      return res.status(201).send({
        succcess: true,
        message: "User created successfully",
        data: user,
        verificationUrl: url
      })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "User creation failed"
      })
    })
};
const login = (req, res) => {

  User.findOne({ email: req.body.email })
    .then((user) => {

      if (!user) {
        return res.status(404).send({
          succcess: false,
          message: "User not found"
        })
      }

      // account verification
      if (!user.active) {
        return res.status(401).send({
          succcess: false,
          message: "Pending account verification."
        })
      }

      user.comparePassword(req.body.password)
        .then((isMatch) => {

          if (!isMatch) {
            return res.status(401).send({
              succcess: false,
              message: "Invalid credentials"
            })
          }

          const token = generateToken(user)

          return res.status(200).cookie("SessionToken", token, {
            httpOnly: true,
          }).send({
            succcess: true,
            message: "User logged in successfully"
          })
        })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "User login failed"
      })
    })
}

const logout = (req, res) => {

  res.clearCookie("SessionToken")
  return res.status(200).send({
    succcess: true,
    message: "User logged out successfully"
  })
}

const verify = (req, res) => {

  User.findById(req.params.id)
    .then((user) => {

      if (!user) {
        return res.status(404).send({
          succcess: false,
          message: "Account not found"
        })
      }

      user.active = true

      user.save()
        .then(() => {

          return res.status(200).send({
            succcess: true,
            message: "Account verified successfully"
          })
        })
    })
    .catch((err) => {
      res.status(400).send({
        succcess: false,
        message: "Account verification failed"
      })
    })
}

module.exports = {
  addUser,
  getUsers,
  login,
  logout,
  verify
};
