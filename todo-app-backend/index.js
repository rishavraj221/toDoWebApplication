const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const config = require("config");
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');

const app=express();

if (!config.get('jwtPrivateKey')) {
        console.error('FATAL ERROR: jwtPrivateKey is not defined');
        process.exit(1);
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);

mongoose.connect(config.get("mongodbUrl"), { useUnifiedTopology: true, useNewUrlParser: true })
        .then(()=>console.log('mongo connected..'))
        .catch(err=>{console.log(err)});

const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`server started on port ${port}`));