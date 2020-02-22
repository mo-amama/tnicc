const express = require('express');
const router = express.Router();
const user = require('../controller/User');


// routes
router.get('/',user.getAll);
router.get('/current', user.getCurrent);
router.get('/:id', user.getById);
router.put('/current/:id', user.update);
router.post('/create', user.register);
router.delete('/:id', user._delete);

module.exports = router;  