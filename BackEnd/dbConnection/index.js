const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => console.log('connected'));