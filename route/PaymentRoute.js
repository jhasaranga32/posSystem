const express = require('express');
const router=express.Router();
const PaymentController =require('../controller/PaymentController');
const verifyToken = require('../middleware/Aluth.js');

router.post('/create',verifyToken(['admin','manager','user']), PaymentController.makepayment);
router.get('/income-by-day',verifyToken(['admin','manager']), PaymentController.findIncomeToday);
router.get('/income-by-month', verifyToken(['admin','manager']),PaymentController.findIncomeByMonth);


module.exports=router;