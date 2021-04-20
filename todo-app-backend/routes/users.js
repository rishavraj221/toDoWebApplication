const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');

const { User, validate } = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send('Username already exists.');

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    user = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        password: hashed
    });
    await user.save();

    const token = user.generateAuthToken();
    res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send(_.pick(user, ['fullName', 'username']));
})

module.exports = router;