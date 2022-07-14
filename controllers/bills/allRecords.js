const { db } = require('../../models/electricityBillSchema');
const BillSchema = require('../../models/electricityBillSchema');

const allRecords = async (req, res) => {
    const { page = 1, limit = 9, sort = -1, sort_type='bill_date' } = req.query  //seting default value of page 1 and limit = 2 sort is either 1 or -1
    await db.collection('bills')
            .find()
            .sort(sort_type, sort)
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