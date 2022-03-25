import { Task } from "./types/task";
import taskToStr from "./types/taskToStr";

it("stringifies an addition operation", () => {
  const task: Task = {
    id: "1",
    operation: "addition",
    left: 4,
    right: 10,
  };
  const str = taskToStr(task);
  expect(str).toBe("4 + 10");
});

it("stringifies a subtraction operation", () => {
  const task: Task = {
    id: "1",
    operation: "subtraction",
    left: 4,
    right: 10,
  };
  const str = taskToStr(task);
  expect(str).toBe("4 - 10");
});

it("stringifies a multiplication operation", () => {
  const task: Task = {
    id: "1",
    operation: "multiplication",
    left: 4,
    right: 10,
  };
  const str = taskToStr(task);
  expect(str).toBe("4 * 10");
});

it("stringifies a division operation", () => {
  const task: Task = {
    id: "1",
    operation: "division",
    left: 4,
    right: 10,
  };
  const str = taskToStr(task);
  expect(str).toBe("4 / 10");
});

it("stringifies a remainder operation", () => {
  const task: Task = {
    id: "1",
    operation: "remainder",
    left: 4,
    right: 10,
  };
  const str = taskToStr(task);
  expect(str).toBe("4 % 10");
});
