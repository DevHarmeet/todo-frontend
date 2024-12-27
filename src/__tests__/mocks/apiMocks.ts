export const mockTaskService = {
  getTasks: jest.fn(),
  getTask: jest.fn(),
  createTask: jest.fn(),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
};

jest.mock("@/utils/api", () => ({
  taskService: mockTaskService,
  getTasks: mockTaskService.getTasks,
  getTask: mockTaskService.getTask,
  createTask: mockTaskService.createTask,
  updateTask: mockTaskService.updateTask,
  deleteTask: mockTaskService.deleteTask,
}));

describe("apiMocks", () => {
  it("exists", () => {
    expect(mockTaskService).toBeDefined();
  });
});
