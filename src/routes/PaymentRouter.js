const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config()

router.get('/config', (req, res) => {
    return res.status(200).json({
        statuus: 'OK',
        data: process.env.CLIENT_ID
    })
});


module.exports = router;