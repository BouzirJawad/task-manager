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

//display all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//find task by id
router.get('/:id', async (req, res)=>{
    try {
        const taskByID = await Task.findById(req.params.id)
        if (!taskByID) {
            return res.status(404).json({error: 'Task not found'})
        }
        res.json(taskByID);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

//update task by id
router.patch('/:d', async (req, res)=>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!task) {
            return res.status(404).json({error: 'Task not found'});
        }
        res.json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}),

module.exports = router;
