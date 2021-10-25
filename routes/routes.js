const express = require('express');
const {search, renderPage} = require('../controllers/searchController');
const router = express.Router();

router.post('/search', search);
router.get('/', renderPage);
module.exports = {
    routes: router
}