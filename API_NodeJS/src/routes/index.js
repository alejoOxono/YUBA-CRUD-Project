const { Router } = require('express');
const getData = require('../routes/getDepartmento');
const postData = require('../routes/postDepartmento');  
const putData = require('../routes/putDepartmento');  
const deleteData = require('../routes/deleteDepartmento');  


const router = Router();

router.get('/api/get', getData);
router.post('/api/post', postData);
router.post('/api/put', putData);
router.get('/api/delete', deleteData);


module.exports = router;