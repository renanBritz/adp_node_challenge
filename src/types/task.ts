import type { Operation } from "./operation";

export interface Task {
  id: string;
  operation: Operation;
  left: number;
  right: number;
}
