const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./routes/users');
const data = require('./routes/data');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/index').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/users', users);
app.use('/data', data);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = server;