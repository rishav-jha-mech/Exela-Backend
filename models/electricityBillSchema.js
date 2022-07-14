const mongoose = require('mongoose');


const BillSchema = new mongoose.Schema({
    bill_date: {
        type: Date,
        required: true,        
    },
    paid_date: {
        type: Date,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
})

BillSchema.set('timestamps',true);

module.exports = Bill = mongoose.model('Bill',BillSchema)