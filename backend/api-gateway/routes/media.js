var express = require('express');
var router = express.Router();


const mediaHandler = require('./handler/media');
router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getAll);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
