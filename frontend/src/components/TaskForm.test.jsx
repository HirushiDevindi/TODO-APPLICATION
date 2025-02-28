import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";
import { useTasks } from "../App";

jest.mock("../App", () => ({
  useTasks: jest.fn(),
}));

describe("TaskForm", () => {
  it("renders the form correctly", () => {
    useTasks.mockReturnValue({ addTask: jest.fn() });
    render(<TaskForm />);
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("calls addTask when the form is submitted", () => {
    const addTask = jest.fn();
    useTasks.mockReturnValue({ addTask });
    render(<TaskForm />);
    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "Task Description" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(addTask).toHaveBeenCalledWith({
      title: "New Task",
      description: "Task Description",
      completed: false,
    });
  });
});
