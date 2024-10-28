//This module will have the routing of out url shortner or API's

const express = require('express');
const router = express.Router();
const urlShortner = require('../controller/url');

router.post('/url', urlShortner);

module.exports = router;