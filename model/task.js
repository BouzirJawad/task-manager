const mongoose = require('mongoose');

//creating task schema
const taskSchema = new mongoose.Schema({
     title:{
        type: String,
        required: true
     },
     description:{
          type: String,
          required: true
     },
     completed:{
          type: Boolean,
          default: false
     }
});

//creating task model
const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;

