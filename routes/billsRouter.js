const express = require('express');
const router = express.Router()
const { check } = require('express-validator');
const allRecords = require('../controllers/bills/allRecords');
const postAddBill = require('../controllers/bills/postAddBill');

router.get('/', allRecords)
// router.get('/bill/:id',getABill)
router.post('/', [
    check('bill_date','This Field Is required').not().isEmpty(),
    check('paid_date','This Field Is required').not().isEmpty(),
    check('units','This Field Is required').not().isEmpty(),
    check('amount','This Field Is required').not().isEmpty(),
],
    postAddBill
)
// router.put('/bill/:id',updateBill)
// router.delete('/bill/:id',deleteBill)


module.exports = router