const express = require ('express');
const router = express.Router();
const shopControllers = require ('../controllers/shopController.js');

router.get ('/', shopControllers.shop);
router.get ('/item/:id', shopControllers.item); 
//ACÁ IRÍA const id = req.params.id;
//busco la info del item con el ID de la ruta res.send ()
router.post ('/item/:id/add', shopControllers.itemAdd);
router.get ('/cart', shopControllers.cart);
router.post ('/cart', shopControllers.cartPost);

module.exports = router;