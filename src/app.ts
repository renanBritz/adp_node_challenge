import axios from "axios";
import { GET_TASK_URL, SUBMIT_INTERVAL, SUBMIT_TASK_URL } from "./constants";
import handleTask from "./handleTask";
import { Task } from "./types/task";
import taskToStr from "./taskToStr";

const app = async () => {
  const run = async () => {
    const { data: task } = await axios.get<Task>(GET_TASK_URL);

    const result = handleTask(task.operation, task.left, task.right);
    console.log(`Submitting (${taskToStr(task)}) = ${result}`);
    const { data: response } = await axios.post(SUBMIT_TASK_URL, {
      id: task.id,
      result,
    });

    console.log(`${response}!`);
  };

  await run();
  setInterval(run, SUBMIT_INTERVAL);
};

export default app;
