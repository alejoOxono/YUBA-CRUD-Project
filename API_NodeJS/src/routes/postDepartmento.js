const { Router } = require("express");
const express = require("express");
const insert = require("../querys_modules/insert");

const router = Router();
router.use(express.json());


router.post('/api/post', async (req, res) => {
    try {
        let data = req.body;
        await insert(data);
        res.json({ response: 'los datos han sido correctamente ingresados' });
    }
    catch (err) {
        res.json(err);
    }
})


module.exports = router;