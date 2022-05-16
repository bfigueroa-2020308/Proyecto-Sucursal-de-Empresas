'use strict'

const cors = require('express');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

module.exports = app;