import { Task } from "./types/task";

const taskToStr = (task: Task): string => {
  switch (task.operation) {
    case "addition":
      return `${task.left} + ${task.right}`;
    case "subtraction":
      return `${task.left} - ${task.right}`;
    case "multiplication":
      return `${task.left} * ${task.right}`;
    case "division":
      return `${task.left} / ${task.right}`;
    case "remainder":
      return `${task.left} % ${task.right}`;
    default:
      throw new Error("Invalid operation!");
  }
};

export default taskToStr;
