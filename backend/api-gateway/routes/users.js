var express = require('express');
var router = express.Router();

const usersHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');


router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/', verifyToken, usersHandler.update);
router.get('/', verifyToken, usersHandler.getUser);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
