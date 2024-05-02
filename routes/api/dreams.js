const express = require('express');
const router = express.Router();
const dreamsCtrl = require('../../controllers/api/dreams');

// POST /api/dreams
router.post('/', dreamsCtrl.create);

// GET /api/dreams/all
router.get('/', dreamsCtrl.index);

//GET /api/dreams/:id
router.get('/:id', dreamsCtrl.show)

// POST /api/dreams/image
router.post('/image', dreamsCtrl.getImage);

// DELETE /api/dreams/:id
router.delete('/:id', dreamsCtrl.delete);

module.exports = router;