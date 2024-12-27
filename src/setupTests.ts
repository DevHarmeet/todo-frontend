import "@testing-library/jest-dom";
import { mockTaskService } from "./__tests__/mocks/apiMocks";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

jest.mock("@/utils/api", () => ({
  __esModule: true,
  default: mockTaskService,
  taskService: mockTaskService,
  getTasks: mockTaskService.getTasks,
  getTask: mockTaskService.getTask,
  createTask: mockTaskService.createTask,
  updateTask: mockTaskService.updateTask,
  deleteTask: mockTaskService.deleteTask,
}));
