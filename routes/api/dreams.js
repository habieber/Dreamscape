const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/dreams');

// POST /api/dreams
router.post('/', notesCtrl.create);

// GET /api/dreams/all
router.get('/', notesCtrl.index);

// POST /api/dreams/image
router.post('/image', notesCtrl.getImage);

module.exports = router;