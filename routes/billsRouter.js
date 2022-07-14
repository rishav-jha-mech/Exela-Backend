const express = require('express');
const router = express.Router()
const { check } = require('express-validator');
const allRecords = require('../controllers/bills/allRecords');
const deleteBill = require('../controllers/bills/deleteRecord');
const getABill = require('../controllers/bills/getABill');
const postAddBill = require('../controllers/bills/postAddBill');
const updateBill = require('../controllers/bills/updateRecords');

router.get('/', allRecords)
router.get('/bill/:id',getABill)
router.post('/', [
    check('bill_date', 'This Field Is required').not().isEmpty(),
    check('paid_date', 'This Field Is required').not().isEmpty(),
    check('units', 'This Field Is required').not().isEmpty(),
    check('amount', 'This Field Is required').not().isEmpty(),
],
    postAddBill
)
router.put('/bill/:id',
    [
        check('bill_date', 'This Field Is required').not().isEmpty(),
        check('paid_date', 'This Field Is required').not().isEmpty(),
        check('units', 'This Field Is required').not().isEmpty(),
        check('amount', 'This Field Is required').not().isEmpty(),
    ],
    updateBill)
router.delete('/bill/:id',deleteBill)


module.exports = router