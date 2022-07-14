const Bill = require('../../models/electricityBillSchema')
const { validationResult } = require('express-validator')

const updateBill = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
    }

    const id = req.params.id;
    await Bill.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Bill with id=${id}. Maybe Bill was not found!`
                });
            } else res.send({ message: "Bill was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Bill with id=" + id
            });
        });
}

module.exports = updateBill