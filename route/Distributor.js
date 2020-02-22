const express = require('express');
const router = express.Router();
const distributor = require('../controller/Distributor');


// routes
router.get('/',distributor.getAll);
router.get('/checklink', distributor.checkLinkStatus);
router.get('/:id', distributor.getById);
router.put('/:id', distributor.update);
router.post('/sendmail', distributor.sendEmail);
router.post('/create', distributor.register);
router.delete('/:id', distributor._delete);

module.exports = router;  