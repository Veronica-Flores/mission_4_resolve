const express = require ('express');
const router = express.Router();
const authControllers = require ('../controllers/authController.js')

router.get('/login', authControllers.login);
router.post('/login', authControllers.loginPost);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registerPost);
router.get('/logout', authControllers.logout);

module.exports = router;