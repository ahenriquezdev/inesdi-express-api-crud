const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    email: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  bio: {
    type: String
  },
  active: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
      return ret;
    }
  }
});

// Compare passwords
userSchema.methods.comparePassword = function (passwordAttempt) {

  return bcrypt.compare(passwordAttempt, this.password)
    .then((isMatch) => {
      return isMatch;
    })
    .catch((err) => {
      return false;
    });
}


// Password hashing
userSchema.pre("save", function (next) {

  if (this.isModified("password")) {
    bcrypt.hash(this.password, saltRounds)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
