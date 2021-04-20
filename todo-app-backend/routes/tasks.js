const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');

const { User } = require('../models/User');
const { Task, validate } = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user._id);

    res.send(user.allTasks);
});

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let user = await User.findById(req.user._id);
    user.allTasks.push(req.body);
    user.save();
    
    res.send('created successfully...');
});

router.put('/', auth, async (req, res) => {
    const { error } = validate({ name: req.body.name, description: req.body.description });
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(req.user._id);
    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            user.allTasks[i].name = req.body.name;
            user.allTasks[i].description = req.body.description;
            break;
        }
    }
    user.save();
    
    res.send('edited successfully...');
});

router.put('/checkTask', auth, async (req, res) => {
    let user = await User.findById(req.user._id);

    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            user.allTasks[i].status = !user.allTasks[i].status;
            break;
        }
    }
    user.save();

    res.send('successfull');
});

router.put('/deleteTask', auth, async (req, res) => {
    let user = await User.findById(req.user._id);

    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            user.allTasks.splice(i, 1);
            break;
        }
    }
    user.save();

    res.send('debugging');
});

router.put('/checkSubTask', auth, async (req, res) => {
    let user = await User.findById(req.user._id);

    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            for (var j in user.allTasks[i].subTasks) {
                if (user.allTasks[i].subTasks[j]._id.toString() === req.body.subTaskId) {
                    user.allTasks[i].subTasks[j].status = !user.allTasks[i].subTasks[j].status
                    break;
                }
            }
            break;
        }
    }
    user.save();

    res.send('successfull');
});

router.post('/createSubTask', auth, async (req, res) => {
    const { error } = validate({ name: req.body.name, description: req.body.description });
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(req.user._id);
    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            user.allTasks[i].subTasks.push({
                name: req.body.name,
                description: req.body.description
            });
            break;
        }
    }
    user.save();
    
    res.send('created successfully...');
});

router.put('/editSubTask', auth, async (req, res) => {
    const { error } = validate({ name: req.body.name, description: req.body.description });
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findById(req.user._id);
    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            for (var j in user.allTasks[i].subTasks) {
                if (user.allTasks[i].subTasks[j]._id.toString() === req.body.subTaskId) {
                    user.allTasks[i].subTasks[j].name = req.body.name;
                    user.allTasks[i].subTasks[j].description = req.body.description;
                    break;
                }
            }
            break;
        }
    }
    user.save();
    
    res.send('edited successfully...');
});

router.put('/deleteSubTask', auth, async (req, res) => {
    let user = await User.findById(req.user._id);

    for (var i in user.allTasks) {
        if (user.allTasks[i]._id.toString() === req.body.taskId) {
            for (var j in user.allTasks[i].subTasks) {
                if (user.allTasks[i].subTasks[j]._id.toString() === req.body.subTaskId) {
                    user.allTasks[i].subTasks.splice(j, 1);
                    break;
                }
            }
            break;
        }
    }
    user.save();

    res.send('debugging');
});

module.exports = router; 