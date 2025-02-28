import "./App.css";
import { useState, useEffect, createContext, useContext } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";
//import MockAdapter from "axios-mock-adapter";

// const API_URL = "http://todo-backend:8080/api/tasks";
const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080/api/tasks";

const TaskContext = createContext();
export function useTasks() {
  return useContext(TaskContext);
}

// Mocking API calls
// const mock = new MockAdapter(axios);
// const dummyTasks = [
//   { id: 1, title: "Task 1", completed: false },
//   { id: 2, title: "Task 2", completed: false },
//   { id: 3, title: "Task 3", completed: false },
// ];

// mock.onGet(`${API_URL}/recent`).reply(200, dummyTasks);
// mock.onPost(API_URL).reply((config) => {
//   const newTask = JSON.parse(config.data);
//   dummyTasks.unshift(newTask);
//   return [200, newTask];
// });
// mock.onPut(/\/api\/tasks\/\d+\/complete/).reply((config) => {
//   const taskId = parseInt(config.url.split("/").slice(-2)[0], 10);
//   const taskIndex = dummyTasks.findIndex((task) => task.id === taskId);
//   if (taskIndex !== -1) {
//     dummyTasks.splice(taskIndex, 1);
//   }
//   return [200];
// });

function App() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await axios.get(`${API_URL}`);
  //     setTasks(response.data);
  //   };
  //   fetchTasks();
  // }, []);

  const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}`);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await axios.post(API_URL, task);
    //setTasks((prev) => [task, ...prev].slice(0, 5));
    fetchTasks();
  };

  const completeTask = async (taskId) => {
    await axios.patch(`${API_URL}/${taskId}`);
    //setTasks((prev) => prev.filter((task) => task.id !== taskId));
    fetchTasks();
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask }}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg ">
          <h1 className="text-2xl font-bold text-center mb-8 text-zinc-600">
            TODO APPLICATION
          </h1>
          <hr className="mb-8" />
          <div className="flex gap-8">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
