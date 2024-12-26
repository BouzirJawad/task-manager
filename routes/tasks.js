const express = require('express');
const Task = require('../model/task');
const router = express.Router();

//create a new task
router.post('/', async (req, res)=>{
    try {
        const task = new Task({
            title: req.body.title,
            description: req.body.description
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

module.exports = router;
