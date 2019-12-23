// const auth = require("../middleware/auth");
// const bcrypt = require("bcrypt");
// const { User, validate } = require("../models/user.model");
const express = require('express');
const router = express.Router();

router.get('/user', async (req, res) => {
  const user = {name: 'osama', gender: 'male'};
  res.send(user);
});

module.exports = router;
