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
    ],
  },
];

const inquirerMenu = async () => {
  console.log(
    "------- Welcome to Todoist App by @matisantillan11 -------".rainbow
  );

  const { option } = await inquirer.prompt(menuList);

  return option;
};

module.exports = { inquirerMenu };
