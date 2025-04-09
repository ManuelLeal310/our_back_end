const UserModel = require('../models/User.model');
const router = require("express").Router();

// ******* all users will use authentication (login/verify) and token (expire)
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ******* router for POST/ CREATE user goes here

module.exports = router;