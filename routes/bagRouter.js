const express = require('express');
const router = express.Router();

router.get('/bag', async (req, res) => {
  const user = {ID: '1234', user: 'osama'};
  res.send(user);
});

module.exports = router;
