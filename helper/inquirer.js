const inquirer = require("inquirer");
const colors = require("colors");
const TaskRepository = require("../repositories/TaskRepository");
const menuList = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: 1,
        name: "1 - Create task",
      },
      {
        value: 2,
        name: "2 - List tasks",
      },
      {
        value: 3,
        name: "3 - Complete Task",
      },
      {
        value: 4,
        name: "4 - Delete Task",
      },
      {
        value: 5,
        name: "5 - Exit",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log("Select an option 😋".bold);
  const { option } = await inquirer.prompt(menuList);
  return option;
};

const inquirerGetOption = async (message) => {
  const question = [
    {
      type: "input",
      name: "answer",
      message,
    },
  ];

  const { answer } = await inquirer.prompt(question);
  return answer;
};

const allTasks = async (message) => {
  const taskRepository = new TaskRepository();
  const tasks = taskRepository.getTasks();
  const taskChoices = [];
  tasks.map((task) => {
    taskChoices.push({ value: task.title, name: task.title });
  });
  taskChoices.push({ value: false, name: "Go back ...>".magenta });
  const listOfTasks = [
    {
      type: "list",
      name: "option",
      message: message,
      choices: taskChoices,
    },
  ];
  const { option } = await inquirer.prompt(listOfTasks);
  return option;
};

module.exports = { inquirerMenu, inquirerGetOption, allTasks };
