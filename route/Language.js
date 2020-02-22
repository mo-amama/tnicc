const express = require('express');
const router = express.Router();
const lang = require('../controller/Language');


// routes
router.get('/',lang.getAll);
router.get('/:id', lang.getById);
router.put('/:id', lang.update);
router.post('/create', lang.register);
router.delete('/:id', lang._delete);

module.exports = router;  