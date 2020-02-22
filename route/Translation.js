const express = require('express');
const router = express.Router();
const translation = require('../controller/Translation');


// routes
router.get('/',translation.getAll);
router.get('/:id', translation.getById);
router.put('/:id', translation.update);
router.post('/create', translation.register);
router.delete('/:id', translation._delete);

module.exports = router;  