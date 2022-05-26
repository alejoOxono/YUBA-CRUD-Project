const { Router } = require("express");
const express = require("express");
const select = require("../querys_modules/select");

const router = Router();
router.use(express.json());


router.get('/api/get', async (req, res) => {
    try {
        let result = await select();
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }
})


module.exports = router;