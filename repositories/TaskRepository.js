const Task = require("../models/Task.js");
const { pushData, getData } = require("../helper/FileManagment.js");
class TaskRepository {
  constructor() {
    const data = getData();
    if (data) {
      this._tasks = JSON.parse(data);
    } else {
      this._tasks = [];
    }
  }

  getTasks() {
    return this._tasks;
  }

  /**
   *
   *  @param {String} title
   *
   **/
  addTasks(title) {
    const task = new Task(title);
    this._tasks.push(task);
    pushData(this._tasks);
  }

  deleteTask() {}
  completeTask() {}
}
module.exports = TaskRepository;
