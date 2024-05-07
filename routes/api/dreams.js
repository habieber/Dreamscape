const express = require('express');
const router = express.Router();
const dreamsCtrl = require('../../controllers/api/dreams');
const { BsFillRouterFill } = require('react-icons/bs');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST /api/dreams
router.post('/', dreamsCtrl.create);

//GET /api/dreams/all
router.get('/', ensureLoggedIn, dreamsCtrl.index);

//GET /api/dreams/:id
router.get('/:id', ensureLoggedIn, dreamsCtrl.show)

//POST /api/dreams/image
router.post('/image', dreamsCtrl.getImage);

//DELETE /api/dreams/:id
router.delete('/:id', ensureLoggedIn, dreamsCtrl.delete);

//PUT /api/dreams/:id
router.put('/:id', ensureLoggedIn, dreamsCtrl.update);

module.exports = router;