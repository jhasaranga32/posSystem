const express = require('express');
const router=express.Router();
const UserController =require('../controller/UserController');




router.post('/signup',UserController.login);
router.post('/login/:id',UserController.signup);


module.exports=router; 