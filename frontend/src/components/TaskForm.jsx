import { useState } from "react";
import { useTasks } from "../App";
import React from "react";

function TaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({
        title: title,
        description: description,
        completed: false,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="w-1/2 flex flex-col items-start gap-4 ">
      <h2 className="text-xl font-bold mb-4">Add a Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded mb-2 h-48"
          required
        />
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskForm;
