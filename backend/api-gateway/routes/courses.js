const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

const verifyToken = require('../middlewares/verifyToken');
const permissions = require('../middlewares/permission');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

router.post('/', verifyToken, permissions('admin'), coursesHandler.create);
router.put('/:id', verifyToken, permissions('admin'), coursesHandler.update);
router.delete('/:id', verifyToken, permissions('admin'), coursesHandler.destroy);


module.exports = router;