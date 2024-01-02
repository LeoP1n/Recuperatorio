const express = require('express');
const mainController = require('../controllers/main');

const router = express.Router();

router.get('/', mainController.home);
router.get('/authors', mainController.authors);
router.get("/books/detail/:id",mainController.detail)

module.exports = router;
