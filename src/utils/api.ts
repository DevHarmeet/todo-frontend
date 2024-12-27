import axios, { AxiosInstance } from "axios";
import { ApiConfig, TaskService } from "@/types/services";
import { Task, CreateTaskDto, UpdateTaskDto } from "@/types/task";
import { ENV } from "@/config/env";

class TaskApiService implements TaskService {
  private api: AxiosInstance;

  constructor(config: ApiConfig) {
    this.api = axios.create(config);
  }

  async getTasks(): Promise<Task[]> {
    try {
      const response = await this.api.get<Task[]>("/tasks");
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  }

  async getTask(id: number): Promise<Task> {
    try {
      const tasks = await this.getTasks();
      const task = tasks.find((t) => t.id === id);

      if (!task) {
        throw new Error(`Task with ID ${id} not found`);
      }

      return task;
    } catch (error: any) {
      console.error("Failed to fetch task:", {
        id,
        error: error.message,
      });
      throw new Error("Failed to fetch task");
    }
  }

  async createTask(task: CreateTaskDto): Promise<Task> {
    try {
      const response = await this.api.post("/tasks", task);
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error("Failed to create task");
    }
  }

  async updateTask(id: number, data: UpdateTaskDto): Promise<Task> {
    try {
      const response = await this.api.put(`/tasks/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw new Error("Failed to update task");
    }
  }

  async deleteTask(id: number): Promise<void> {
    try {
      await this.api.delete(`/tasks/${id}`);
    } catch (error) {
      console.error("Error deleting task:", error);
      throw new Error("Failed to delete task");
    }
  }
}

const taskService = new TaskApiService({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = taskService.getTasks.bind(taskService);
export const getTask = taskService.getTask.bind(taskService);
export const createTask = taskService.createTask.bind(taskService);
export const updateTask = taskService.updateTask.bind(taskService);
export const deleteTask = taskService.deleteTask.bind(taskService);

export default taskService;
