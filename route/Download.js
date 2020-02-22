const express = require('express');
const router = express.Router();
const download = require('../controller/Download');


// routes
router.get('/',download.getAll);
router.get('/:id', download.getById);
router.put('/:id', download.update);
router.post('/create', download.register);
router.delete('/:id', download._delete);

module.exports = router;  