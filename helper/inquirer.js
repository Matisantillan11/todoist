const inquirer = require("inquirer");
const colors = require("colors");

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
        value: 0,
        name: "0 - Exit",
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

module.exports = { inquirerMenu, inquirerGetOption };
