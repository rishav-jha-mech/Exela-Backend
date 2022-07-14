const Bill = require('../../models/electricityBillSchema')

const getABill = (req, res) => {
    
    let ID = req.params.id

    Bill.findById(ID)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Bill with id = " + ID });
      else {
        res.send({data: data})
      }
    })
    .catch(err => { 
      res
        .status(500)
        .send({ message: "Error retrieving Bill with id=" + ID });
      console.error(err)
    });
}

module.exports = getABill
