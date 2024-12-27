import { Task, CreateTaskDto, UpdateTaskDto } from "./task";

export interface TaskService {
  getTasks(): Promise<Task[]>;
  getTask(id: number): Promise<Task>;
  createTask(data: CreateTaskDto): Promise<Task>;
  updateTask(id: number, data: UpdateTaskDto): Promise<Task>;
  deleteTask(id: number): Promise<void>;
}

export interface ApiConfig {
  baseURL: string;
  headers?: Record<string, string>;
  timeout?: number;
}
