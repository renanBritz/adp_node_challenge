import type { Operation } from "./types/operation";

const handleTask = (operation: Operation, left: number, right: number) => {
  switch (operation) {
    case "division":
      return left / right;
    case "multiplication":
      return left * right;
    case "subtraction":
      return left - right;
    case "addition":
      return left + right;
    case "remainder":
      return left % right;
    default:
      throw new Error("Invalid operation!");
  }
};

export default handleTask;
