import { renderHook, act } from "@testing-library/react";
import { useTasks } from "@/hooks/useTasks";
import { getTasks, updateTask, deleteTask } from "@/utils/api";
import { Task } from "@/types/task";

jest.mock("@/utils/api");

describe("useTasks", () => {
  const mockTasks: Task[] = [
    {
      id: 1,
      title: "Task 1",
      color: "#FFD700",
      completed: false,
      createdAt: "2024-12-26T18:30:53.798Z",
      updatedAt: "2024-12-26T18:59:09.024Z",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches tasks on mount when no initial tasks", async () => {
    (getTasks as jest.Mock).mockResolvedValueOnce(mockTasks);
    const { result } = renderHook(() => useTasks([]));

    expect(result.current.loading).toBe(true);
    expect(result.current.tasks).toEqual([]);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.tasks).toEqual(mockTasks);
  });

  it("uses initial tasks without fetching", () => {
    const { result } = renderHook(() => useTasks(mockTasks));

    expect(result.current.loading).toBe(false);
    expect(result.current.tasks).toEqual(mockTasks);
    expect(getTasks).not.toHaveBeenCalled();
  });

  it("handles task updates successfully", async () => {
    const updatedTask = { ...mockTasks[0], completed: true };
    (updateTask as jest.Mock).mockResolvedValueOnce(updatedTask);

    const { result } = renderHook(() => useTasks(mockTasks));

    await act(async () => {
      await result.current.updateTaskInState(1, { completed: true });
    });

    expect(result.current.tasks[0].completed).toBe(true);
    expect(updateTask).toHaveBeenCalledWith(1, { completed: true });
  });

  it("reverts state on update failure", async () => {
    (updateTask as jest.Mock).mockRejectedValueOnce(undefined);
    (getTasks as jest.Mock).mockResolvedValueOnce(mockTasks);

    const { result } = renderHook(() => useTasks(mockTasks));

    await act(async () => {
      await result.current.updateTaskInState(1, { completed: true });
    });

    expect(getTasks).toHaveBeenCalled();
  });

  it("handles task deletion successfully", async () => {
    (deleteTask as jest.Mock).mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useTasks(mockTasks));

    await act(async () => {
      await result.current.removeTaskFromState(1);
    });

    expect(result.current.tasks).toHaveLength(0);
    expect(deleteTask).toHaveBeenCalledWith(1);
  });

  it("reverts state on deletion failure", async () => {
    (deleteTask as jest.Mock).mockRejectedValueOnce(undefined);
    (getTasks as jest.Mock).mockResolvedValueOnce(mockTasks);

    const { result } = renderHook(() => useTasks(mockTasks));

    await act(async () => {
      await result.current.removeTaskFromState(1);
    });

    expect(getTasks).toHaveBeenCalled();
  });
});
