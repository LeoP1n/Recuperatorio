const express = require('express');
const mainController = require('../../controllers/api/main');

const router = express.Router();

router.get('/products', mainController.listProducts);
router.get('/products/:id', mainController.showProduct);
router.get('/users', mainController.listUsers);
router.get('/users/:id', mainController.showUser);
router.get('/categories', mainController.listCategories);
router.get('/authors', mainController.listAuthors);

module.exports = router;
