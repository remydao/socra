const express = require('express');
const router = express.Router();
const TaskModel = require("../models/taskModel");

router.get('/tasks', async function(req, res) {
    const tasks = await TaskModel.find().sort({ timestamp: "desc" });
	res.send(tasks);
});

module.exports = router;