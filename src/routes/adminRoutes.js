const express = require ('express');
const router = express.Router();
const adminControllers = require ('../controllers/adminController.js');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createGet);
router.post('/create', adminControllers.createPost);
router.get('/edit/:id', adminControllers.edit);
router.put('/edit/:id', adminControllers.editPut);
router.delete('/delete/:id', adminControllers.delete);


module.exports = router;