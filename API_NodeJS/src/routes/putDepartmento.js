const { Router } = require("express");
const express = require("express");
const update = require("../querys_modules/update");

const router = Router();
router.use(express.json());


router.post('/api/put', async (req, res) => {
    try {
        let data = req.body;
        await update(data);
        res.json({ response: 'los datos han sido correctamente actualizados' });
    }
    catch (err) {
        res.json(err);
    }
})


module.exports = router;