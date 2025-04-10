const AdminModel = require('../models/Admin.model');
const router = require("express").Router();

// ******* all users will use authentication (login/verify) and token (expire)
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ******** MISSING AUTHENTHICATION FUNCTIO goes here:

// ******* router for POST/ CREATE user goes here

router.post('/signup', async (req, res) => {
    try {
        const { adminName, email, password } = req.body;
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);
        const hashedAdmin = { adminName, email, password: hashedPassword };

// ******** FROM line 14 to 17 (until here) we ONLY POST/ created the hashed admin 

// ******** NOW we will POST/ Create the newAdmin in the DB

const newAdmin = await AdminModel.create(hashedAdmin);
console.log('OMG we created a ADMIN');
res.status(201).json(newAdmin);

} catch (error) {
console.log('Problem creating Admin');
res.status(500).json({Error: 'Problem creating newAdmin'});
}
});

module.exports = router;