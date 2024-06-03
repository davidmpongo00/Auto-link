const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/get-cookie', async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await axios.get(`https://cookiegetterboost.onrender.com/get_cookie?email=${email}&password=${password}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get cookie' });
  }
});

router.post('/boost-reaction', async (req, res) => {
  const { link, type, cookie } = req.body;
  try {
    const response = await axios.post('https://cookiegetterboost.onrender.com/api/boost', {
      link,
      type,
      cookie
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to boost reaction' });
  }
});

module.exports = router;
