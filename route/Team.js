const express = require('express');
const router = express.Router();
const team = require('../controller/Team');


// routes
router.get('/',team.getAll);
router.get('/:id', team.getById);
router.put('/:id', team.update);
router.get('/link/:id', team.getByName);
router.post('/create', team.register);
router.post('/link/:id', team.activate);
router.delete('/:id', team._delete);

module.exports = router;  