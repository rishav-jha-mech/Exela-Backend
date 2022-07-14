const { db } = require('../../models/electricityBillSchema');
const BillSchema = require('../../models/electricityBillSchema');

const allRecords = async (req, res) => {
    const { page = 1, limit = 10, sort = -1 } = req.query  //seting default value of page 1 and limit = 2 sort is either 1 or -1
    await db.collection('bills')
            .find()
            .sort('bill_date', sort)
            .limit(limit * 1)
            .skip((page-1) * limit)
            .toArray()
        .then(results => {
            BillSchema.countDocuments({}).exec().then(count =>{
                res.send({totalBills:count,resultArray:results})
            })
        })
        .catch(error => {
            res.status(500).send('Internal Server Error  ')
            console.error(error)
        })

}

module.exports = allRecords