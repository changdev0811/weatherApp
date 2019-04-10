const express = require('express');
const router = express.Router();
const request = require('request');

const auth = require('../middleware/auth');
const { Data } = require('../models/Data');

const validateInputData = require('../validation/data');

router.get('/', auth, (req, res) => {

    Data.find({ user: req.user.id })
        .then(data => {
            // if(data.length === 0) {
            //     return res.status(404).json({ nodatafound: 'No data found' });
            // }
            res.json(data);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/:id', auth, (req, res) => {
    Data.findById(req.params.id)
        .then(data => {
            // if(!data) {
            //     return res.status(404).json({ nodatafound: 'No data found with that ID'});
            // }
            res.json(data)
        })
        .catch(err => res.status(400).json({ nodatafound: 'No data found with that ID'}));
});

router.post('/', auth, (req, res) => {
    const { errors } = validateInputData(req.body);

    if ( Object.keys(errors).length > 0 ) return res.status(400).json(errors);

    const newData = new Data({
        windBearing: req.body.windBearing,
        dewPoint: req.body.dewPoint,
        windSpeed: req.body.windSpeed,
        cloudCover: req.body.cloudCover,
        pressure: req.body.pressure,
        visibility: req.body.visibility,
        humidity: req.body.humidity,
        uvIndex: req.body.uvIndex,
        user: req.user.id
    });

    newData.save()
        .then(data => res.json(data));
});

router.delete('/:id', auth, (req, res) => {
    Data.findOne({ user: req.user.id })
        .then(data => {
            if(data.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized' });
            }

            data.remove()
                .then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
});

router.post('/predict', (req, res) => {
    let data = {
        "Results": {
            "output1": [
                {
                    "Scored Labels": "11.4044991163351"
                }
            ]
        }
    }
    res.json(JSON.stringify(data));
});

module.exports = router;