const Email = require('../models/email');

exports.getAllEmails = (req, res, next) => {
    Email.find()
        .then(emails => {
            console.log("[GET] - AdminController.getAllEmails - (successfull response)");
            res.json(emails);
        })
        .catch(err => {
            res.json(err);
        })
}