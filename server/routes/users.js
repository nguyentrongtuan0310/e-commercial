const express = require('express');
const verifyToken = require('./../middlewares/verifyToken');
const User = require('./../models/User');
const router = express.Router();

router.get('/getById/:id', verifyToken, (request, response) => {
    const id = request.params.id;
    User.find({_id: id}).exec(function (err, users) {
        response.send(users);
    });
});

module.exports = router;
