import { TaskService } from "@/types/services";

export const mockTaskService: TaskService = {
  getTasks: jest.fn(),
  getTask: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
};

describe("mockTaskService", () => {
  it("exists", () => {
    expect(mockTaskService).toBeDefined();
  });
});
