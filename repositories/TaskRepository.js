const Task = require("../models/Task.js");
class TaskRepository {
  constructor() {
    this._tasks = [];
  }

  getTasks() {}

  /**
   *
   *  @param {String} title
   *
   **/
  addTasks(title) {
    const task = new Task(title);
    this._tasks.push(task);
    return this._tasks;
  }

  deleteTask() {}
  completeTask() {}
}
module.exports = TaskRepository;
