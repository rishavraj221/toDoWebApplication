const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const { taskSchema } = require('./Task');

function validateUser(user) {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(30).required().label("Full Name"),
    username: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  });

  return schema.validate(user);
}

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  },
  allTasks: [taskSchema],
  dateJoined: {
    type: Date,
    default: Date.now
  },
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({
    _id: this._id,
    fullName: this.fullName,
  }, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

module.exports.validate = validateUser;
module.exports.userSchema = userSchema;
module.exports.User = User;