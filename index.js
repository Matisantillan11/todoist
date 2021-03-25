const {
  inquirerMenu,
  inquirerGetOption,
  allTasks,
} = require("./helper/Inquirer.js");
const TaskRepository = require("./repositories/TaskRepository.js");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = "";
  console.log(
    "────────── Welcome to Todoist App by @matisantillan11 ──────────".cyan
  );
  do {
    option = await inquirerMenu();
    switch (option) {
      case 1:
        //permitir al usuario ingresar el titutlo
        const response = await inquirerGetOption("Task title: ".magenta);
        taskRepository.addTasks(response);

        break;

      case 2:
        //mostrar todas las tareas sin completarse
        const tasks = taskRepository.getTasks();
        if (tasks.length == 0) {
          console.log("───── Task list empty ─────".magenta);
        } else {
          console.log("───── Task List ─────".cyan);
          tasks.forEach((title) => {
            let status = "";
            if (title.done === true) {
              status = "  [COMPLETED]".green;
            }
            console.log(`${title.title}${status}`);
          });
          console.log("─────────────────────".cyan);
        }
        break;
      case 3:
        const taskComplete = await allTasks(
          "Select a task to be completed".red
        );
        if (taskComplete) {
          taskRepository.completeTask(taskComplete);
          console.log("Task completed sucess 💯".green);
        }
        break;
      case 4:
        const taskToDelete = await allTasks("Select a task to be deleted".red);
        if (taskToDelete) {
          taskRepository.deleteTask(taskToDelete);
          console.log("Task deleted sucess 💯".green);
        }
        break;
    }
  } while (option !== 5);
};

main();
