const mongoose = require('mongoose');
const Joi = require('joi');
const { boolean } = require('joi');

function validateTask(task) {
  const schema = Joi.object({
    name: Joi.string().min(1).max(100).required().label("Task name"),
    description: Joi.string().max(255).label('Description')
  });

  return schema.validate(task);
}

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  description: {
    type: String,
    maxlength: 255
  },
  status: {
    type: Boolean,
    default: false
  },
  subTasks: {
      type: [new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 100,
        },
        description: {
            type: String,
            maxlength: 255
        }, 
        status: {
            type: Boolean,
            default: false
        },
        dateAdded: {
            type: Date,
            default: Date.now
        },
      })]
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports.validate = validateTask;
module.exports.taskSchema = taskSchema;
module.exports.Task = Task;