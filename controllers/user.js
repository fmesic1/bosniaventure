const { request } = require('express');
const Email = require('../models/email');

exports.sendEmail = (req, res, next) => {
    const email = req.body.email;
    const country = req.body.country;

    if(email && country){
        const newEmail = new Email({
            email: email,
            country: country
        }) 

        newEmail.save()
        .then(result => {
            console.log("[POST] - UserController.sendEmail - (successfull response)");
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
    }
}