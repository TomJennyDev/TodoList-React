import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { getLocalStorage, setLocalStorage } from "./utils/utils";

const data = [
  {
    id: 1,
    taskName: "Learn Javascript",
    status: false,
  },
  {
    id: 2,
    taskName: "Code a todo List",
    status: false,
  },
];

function App() {
  const [taskList, setTaskList] = useState(data);

  const handleRemoveTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const addTask = (formData) => {
    const task = {
      id: Date.now(),
      taskName: formData.taskName,
      status: false,
    };

    setTaskList([...taskList, task]);
  };

  const handleChangeStatus = (checked, taskId) => {
    taskList.forEach((task) => {
      if (task.id === taskId) {
        task.status = checked;
      }
    });

    setTaskList([...taskList]);
  };

  useEffect(() => {
    if (getLocalStorage()) setTaskList(getLocalStorage());
  }, []);

  useEffect(() => {
    setLocalStorage(taskList);
  }, [taskList]);
  return (
    <div className="App">
      <div className="project-container">
        <Header />
        <TaskList
          taskList={taskList}
          handleChangeStatus={handleChangeStatus}
          handleRemoveTask={handleRemoveTask}
        />
        <Form addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
