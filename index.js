const mongoose = require('mongoose');
const express = require('express');
const taskRoutes = require('./routes/tasks.js');

//creating the app
const app = express();

//define a port
const PORT = 3000;

//middleware for parsing body of http
app.use(express.json());

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager').then(()=>{
    console.log('Connected to mongoDB');
}).catch((err)=>console.log(err));

//routes for crud operation
app.use('/tasks', taskRoutes);

//running the server
app.listen(PORT, ()=>{
    console.log("Server is running");
});










