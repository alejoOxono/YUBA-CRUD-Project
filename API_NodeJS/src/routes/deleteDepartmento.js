const { Router } = require("express");
const express = require("express");
const deleteFunction = require("../querys_modules/delete");

const router = Router();
router.use(express.json());


router.get('/api/delete/:codigo', async (req, res) => {
    try {
        let { id } = req.params;
        await deleteFunction(id);
        res.json({ response: `El elemento ha sido eliminado` });
    }
    catch (err) {
        res.json(err);
    }
})


module.exports = router;