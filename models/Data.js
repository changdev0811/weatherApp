const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    windBearing: {
        type: Number,
        required: true
    },
    dewPoint: {
        type: Number,
        required: true
    },
    windSpeed: {
        type: Number,
        required: true
    },
    cloudCover: {
        type: Number,
        required: true
    },
    pressure: {
        type: Number,
        required: true
    },
    visibility: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    uvIndex: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Data = mongoose.model('Data', DataSchema);

exports.Data = Data;