const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const key = require('../config/index').secretOrKey;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fristName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    applications: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Application' 
    }],
    jobs: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Job' 
    }]
});

UserSchema.methods.generateAuthToken = function(user) { 
    const token = jwt.sign({ id: user.id, fristName: user.fristName, lastName: user.lastName }, key);
    return token;
}

const User = mongoose.model('users', UserSchema);

exports.User = User;