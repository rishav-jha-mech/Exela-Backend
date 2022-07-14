const { validationResult } = require('express-validator')
const Bill = require('../../models/electricityBillSchema')

const postAddBill = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
    }
    const { bill_date, paid_date, units, amount } = req.body
    try {
        let bill = new Bill({
            amount: amount,bill_date: bill_date,paid_date: paid_date,units: units
        })
        // saving the bill
        await bill.save()
        res.status(200).send( { message : "Bill Saved Successfully !" } )

    } catch (error) {
        console.error(error)
        res.status(500).send( { message : "Bill can not be saved" } )
    }
}

module.exports = postAddBill