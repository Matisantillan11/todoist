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

  deleteTask(title) {
    this._tasks.map((task, i) => {
      if (task.title == title) {
        this._tasks.splice(i, 1);
        pushData(this._tasks);
      }
    });
  }

  completeTask(title) {
    this._tasks.forEach((task) => {
      if (task.title == title) {
        console.log("entre al if");
        task.done = true;
      } else {
        console.count("no completed");
      }
    });
    pushData(this._tasks);
  }
}
module.exports = TaskRepository;
