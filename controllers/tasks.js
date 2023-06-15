import tasks from "../models/tasks.js";
import Task from "../models/tasks.js";

export const CreateTask = async (req, res, next) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    next(err);
  }
};

export const AllTasks = async (req, res, next) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (err) {
    next(err);
  }
};

export const readTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json("Task deleted");
  } catch (err) {
    next(err);
  }
};
