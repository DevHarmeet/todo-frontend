import { render, screen, fireEvent } from "@testing-library/react";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/types/task";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};

const mockTask: Task = {
  id: 1,
  title: "Test Task",
  color: "#FF5733",
  completed: false,
  createdAt: "",
  updatedAt: ""
};

const mockOnUpdate = jest.fn();
const mockOnDelete = jest.fn();

describe("TaskCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it("renders task title", () => {
    render(
      <TaskCard
        task={mockTask}
        onUpdate={mockOnUpdate}
        onDelete={mockOnDelete}
      />
    );
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("handles completion toggle", () => {
    render(
      <TaskCard
        task={mockTask}
        onUpdate={mockOnUpdate}
        onDelete={mockOnDelete}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockOnUpdate).toHaveBeenCalledWith(1, { completed: true });
  });

  it("confirms before deletion", () => {
    window.confirm = jest.fn(() => true);
    render(
      <TaskCard
        task={mockTask}
        onUpdate={mockOnUpdate}
        onDelete={mockOnDelete}
      />
    );
    const deleteButton = screen.getByLabelText(/delete task/i);
    fireEvent.click(deleteButton);
    expect(window.confirm).toHaveBeenCalled();
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
