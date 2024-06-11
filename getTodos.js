// import model
const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    // fetch all todo item from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todos data fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "server error",
    });
  }
};

exports.getTodosById = async (req, res) => {
  try {
    // fetch todo by id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // if data for given id is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data found with given id",
      });
    }
    // if data found
    res.status(200).json({
      success: true,
      message: "Data found",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "server error",
    });
  }
};
