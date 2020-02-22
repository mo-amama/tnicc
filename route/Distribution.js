const express = require('express');
const router = express.Router();
const distribution = require('../controller/Distribution');


// routes
router.get('/',distribution.getAll);
router.get('/:id', distribution.getById);
router.put('/:id', distribution.update);
router.post('/create', distribution.register);
router.delete('/:id', distribution._delete);

module.exports = router;  