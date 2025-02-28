import { useTasks } from "../App";
import React from "react";

function TaskList() {
  const { tasks, completeTask } = useTasks();
  // Filter tasks to only include those that are not completed
  const incompleteTasks = tasks.filter((task) => !task.completed);

  // Get the latest 5 incomplete tasks
  const latestTasks = incompleteTasks.sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <div className="w-1/2 flex flex-col items-start gap-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <div className="space-y-4 w-full">
        {latestTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border border-gray-300 rounded shadow flex flex-col gap-2 bg-gray-200"
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <div className="flex justify-between items-center gap-5">
              <div className="overflow-x-auto h-auto">
                <p className="text-gray-700">{task.description}</p>
              </div>
              <div className="flex justify-end mt-2">
                <button
                  className="bg-green-500 text-white p-1 rounded hover:bg-green-600 cursor-pointer w-15"
                  onClick={() => completeTask(task.id)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TaskList;
