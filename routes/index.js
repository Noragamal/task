const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome'))
router.post('/customer', controllers.createCustomer);
router.post('/product', controllers.createProduct);
router.get('/getcustomer', controllers.getAllCustomers);
router.get('/getproduct', controllers.getAllProducts);
router.put('/customer/:customerId', controllers.updateCustomer);
router.put('/product/:productId', controllers.updateProduct);
router.delete('/posts/:customerId', controllers.deleteCustomer);
router.delete('/posts/:productId', controllers.deleteProduct);

module.exports = router;