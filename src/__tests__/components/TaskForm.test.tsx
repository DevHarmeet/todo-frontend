import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "@/components/TaskForm";

describe("TaskForm", () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders empty form", () => {
    render(
      <TaskForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
        buttonLabel="Save"
      />
    );
    expect(
      screen.getByPlaceholderText(/brush your teeth/i)
    ).toBeInTheDocument();
  });
});
