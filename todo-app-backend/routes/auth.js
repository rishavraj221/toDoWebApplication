const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { User, validate } = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validateLoginInfo(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Invalid username or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password.');

    const token = user.generateAuthToken();
    res.send(token);
});

router.post('/googleLogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        user = new User({
            fullName: req.body.fullName,
            username: req.body.username,
            password: hashed
        });
        await user.save();
    }

    const token = user.generateAuthToken();
    res.send(token);
});

function validateLoginInfo(req) {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required().label("Username"),
        password: Joi.string().min(8).max(30).required().label("Password"),
    });

    return schema.validateLoginInfo(req);
}

module.exports = router; 