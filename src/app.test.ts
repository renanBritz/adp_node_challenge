import axiosLib from "axios";
import app from "./app";
import { GET_TASK_URL, SUBMIT_INTERVAL, SUBMIT_TASK_URL } from "./constants";

jest.mock("axios");
jest.useFakeTimers();
const axios = axiosLib as jest.Mocked<ReturnType<typeof jest.spyOn>>;
let mockConsoleLog: ReturnType<typeof jest.spyOn>;

// Reference: https://stackoverflow.com/a/58716087
function flushPromises() {
  return new Promise(jest.requireActual("timers").setImmediate);
}

beforeEach(() => {
  mockConsoleLog = jest
    .spyOn(global.console, "log")
    .mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllTimers();
});

it("requests a task and submits the solution", async () => {
  axios.get.mockResolvedValue({
    data: {
      id: "01197496-afa1-4838-9893-eb88adbeb83f",
      operation: "multiplication",
      left: -2359183595862927,
      right: 6096720877741661,
    },
  });
  axios.post.mockResolvedValue({ data: "Correct" });

  await app();

  expect(axios.get).toHaveBeenCalledWith(GET_TASK_URL);

  expect(axios.post).toHaveBeenCalledWith(SUBMIT_TASK_URL, {
    id: "01197496-afa1-4838-9893-eb88adbeb83f",
    result: -1.4383283883323152e31,
  });
});

it("continues running and solving tasks", async () => {
  axios.get.mockResolvedValue({
    data: {
      id: "01197496-afa1-4838-9893-eb88adbeb83f",
      operation: "multiplication",
      left: -2359183595862927,
      right: 6096720877741661,
    },
  });
  axios.post.mockResolvedValue({ data: "Correct" });

  await app();

  jest.advanceTimersByTime(SUBMIT_INTERVAL * 10);
  await flushPromises();
  expect(axios.get).toHaveBeenCalledTimes(11);
  expect(axios.post).toHaveBeenCalledTimes(11);
});

it("logs every attempt", async () => {
  axios.get.mockResolvedValue({
    data: {
      id: "01197496-afa1-4838-9893-eb88adbeb83f",
      operation: "multiplication",
      left: -2359183595862927,
      right: 6096720877741661,
    },
  });
  axios.post.mockResolvedValue({ data: "Correct" });

  await app();
  expect(mockConsoleLog).toHaveBeenCalledWith(
    "Submitting (-2359183595862927 * 6096720877741661) = -1.4383283883323152e+31"
  );
  expect(mockConsoleLog).toHaveBeenCalledWith("Correct!");

  jest.advanceTimersByTime(SUBMIT_INTERVAL * 10);
  await flushPromises();

  expect(mockConsoleLog).toHaveBeenCalledTimes(22);
});
