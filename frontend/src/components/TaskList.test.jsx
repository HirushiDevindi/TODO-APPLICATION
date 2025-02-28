import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList";
import { useTasks } from "../App";

jest.mock("../App", () => ({
  useTasks: jest.fn(),
}));

describe("TaskList", () => {
  it("renders the task list correctly", () => {
    const tasks = [
      { id: 1, title: "Task 1", description: "Description 1" },
      { id: 2, title: "Task 2", description: "Description 2" },
    ];
    useTasks.mockReturnValue({ tasks, completeTask: jest.fn() });
    render(<TaskList />);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("calls completeTask when the Done button is clicked", () => {
    const completeTask = jest.fn();
    const tasks = [{ id: 1, title: "Task 1", description: "Description 1" }];
    useTasks.mockReturnValue({ tasks, completeTask });
    render(<TaskList />);
    fireEvent.click(screen.getByText("Done"));
    expect(completeTask).toHaveBeenCalledWith(1);
  });
});
