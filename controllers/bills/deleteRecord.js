const Bill = require('../../models/electricityBillSchema')

const deleteBill = async(req, res) => {
    const id = req.params.id;

  await Bill.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Bill with id=${id}. Maybe Bill was not found!`
        });
      } else {
        res.send({
          message: "Bill was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bill with id=" + id
      });
    });
}

module.exports = deleteBill