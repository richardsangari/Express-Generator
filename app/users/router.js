var express = require('express');
var router = express.Router();
const {index, getUserId, postUser, putUser, deleteUser, index, getUsers, getUserId } = require("./controler");

/* GET home page. */
router.get('/users ', index );
//.GET Users
router.get('/users', getUsers);
//.GET users with ID
router.get('/users/:id', getUserId);
//.POST menabhkan user baru
router.get('/users', postUser);
//.POST melakukan update pada data users
router.get('/users/:id', putUser);
//.DELETE menghapus data user bedasarkan ID yang dipilih
router.get('/users/:id', deleteUser);



module.exports = router;