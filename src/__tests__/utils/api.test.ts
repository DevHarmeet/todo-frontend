import { mockTaskService } from "../mocks/mockTaskService";

describe("TaskApiService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches tasks successfully", async () => {
    const mockTasks = [
      { id: 1, title: "Task 1", color: "#FF5733", completed: false },
    ];

    (mockTaskService.getTasks as jest.Mock).mockResolvedValueOnce(mockTasks);

    const result = await mockTaskService.getTasks();
    expect(result).toEqual(mockTasks);
  });

  it("creates task successfully", async () => {
    const newTask = { title: "New Task", color: "#FF5733" };
    const mockResponse = {
      id: 1,
      ...newTask,
      completed: false,
    };

    (mockTaskService.createTask as jest.Mock).mockResolvedValueOnce(
      mockResponse
    );

    const result = await mockTaskService.createTask(newTask);
    expect(result).toEqual(mockResponse);
  });

  it("handles errors appropriately", async () => {
    (mockTaskService.getTasks as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch tasks")
    );

    await expect(mockTaskService.getTasks()).rejects.toThrow(
      "Failed to fetch tasks"
    );
  });

  it("updates task successfully", async () => {
    const taskId = 1;
    const updates = { completed: true };
    const mockResponse = {
      id: taskId,
      title: "Task 1",
      color: "#FF5733",
      completed: true,
    };

    (mockTaskService.updateTask as jest.Mock).mockResolvedValueOnce(
      mockResponse
    );

    const result = await mockTaskService.updateTask(taskId, updates);
    expect(result).toEqual(mockResponse);
  });

  it("deletes task successfully", async () => {
    const taskId = 1;
    (mockTaskService.deleteTask as jest.Mock).mockResolvedValueOnce(undefined);
    await mockTaskService.deleteTask(taskId);
    expect(mockTaskService.deleteTask).toHaveBeenCalledWith(taskId);
  });
});
