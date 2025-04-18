const AdminModel = require('../models/Admin.model');
const router = require("express").Router();

// ******* all users will use authentication (login/verify) and token (expire)
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ******** MISSING AUTHENTHICATION FUNCTION goes here:

const { isAuthenticated } = require('../middlewares/jwt.middleware');

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
console.log(error);
res.status(500).json({Error: 'Problem creating newAdmin'});
}
});

// ******* HERE we will POST/ Create a LOGIN with authetication

router.post('/login', async (req, res) => {
    try {
        const foundAdmin = await AdminModel.findOne({email: req.body.email});
        if (foundAdmin) {
            console.log('Admin found');

            const passwordMatch = await bcryptjs.compare(req.body.password, foundAdmin.password);
            if (passwordMatch) {
                console.log('Admin found AND password matches');
                
// ******** Object with user info
                const adminInfo = { email: foundAdmin.email, adminName: foundAdmin.name};

// ******** Create JWT token
                const authToken = jwt.sign(adminInfo, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '24h'});
                res.status(200).json({Message: 'Logged in', authToken });
            
        }  else { 
                console.log('Admin found BUT password doesnt match');
                res.status(401).json({Error: 'didnt work'});
            } 
        } else {
            console.log('No admin found');
            res.status(404).json({Error: 'didnt work'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({Error: 'Horror'});
    }
});

// ******* here the GET/ read/ VERIFY route

router.get('/verify', isAuthenticated, (req, res) => {
console.log('here is the verified route');
res.status(200).json({Message: 'Token valid', payload: req.payload });
});



module.exports = router;