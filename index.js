const { inquirerMenu, inquirerGetOption } = require("./helper/Inquirer.js");
const TaskRepository = require("./repositories/TaskRepository.js");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = "";
  console.log(
    "------- Welcome to Todoist App by @matisantillan11 -------".rainbow
  );
  do {
    option = await inquirerMenu();
    switch (option) {
      case 1:
        //permitir al usuario ingresar el titutlo
        console.log(`El usuario eligió la opcion: ${option}`);
        const response = await inquirerGetOption("Task title: ".magenta);
        taskRepository.addTasks(response);

        break;

      case 2:
        //mostrar todas las tareas sin completarse
        console.log(`El usuario eligió la opcion: ${option}`);
        const tasks = taskRepository.getTasks();
        console.log(tasks);
        break;
    }
  } while (option !== 0);
};

main();
