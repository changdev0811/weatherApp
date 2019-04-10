const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

const validateRegister = require('../validation/register');
const validateLogin = require('../validation/login');

const { User } = require('../models/User');

router.post('/register', (req, res, next) => {
    const { errors } = validateRegister(req.body);

    if ( Object.keys(errors).length > 0 ) return res.status(400).json(errors);

    const fristName = req.body.fristName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if(user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const user = new User({
                    fristName,
                    lastName,
                    email,
                    password
                });
                 bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err) throw err;
                        user.password = hash;
                        user.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
});

router.post('/auth', (req, res, next) => {
    const { errors } = validateLogin(req.body);

    if ( Object.keys(errors).length > 0 ) return res.status(400).json(errors);

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(400).json(errors);
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const token = user.generateAuthToken(user);
                        res.json(token);
                    } else {
                        errors.password = 'Password incorrect';
                        return res.status(400).json(errors);
                    }
                });
        });
});

module.exports = router;