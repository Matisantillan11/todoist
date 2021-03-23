const { v4: uuidv4 } = require("uuid");

class Task {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
    this.done = false;
    this.createdDate = new Date();
    this.finishedDate = null;
  }
}

module.exports = Task;
