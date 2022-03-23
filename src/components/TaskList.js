import React, { Fragment, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList, handleRemoveTask, handleChangeStatus }) => {
  const [visibleTask, setvisibleTask] = useState(false);
  const handleShowTask = (e) => {
    const checked = e.target.checked;
    setvisibleTask(checked);
  };

  return (
    <Fragment>
      <ul className="task-list">
        <TaskItem
          taskList={taskList}
          visibleTask={visibleTask}
          handleChangeStatus={handleChangeStatus}
          handleRemoveTask={handleRemoveTask}
        />
      </ul>

      <div className="togglebutton-wrapper">
        <label htmlFor="filter" className="togglebutton-label">
          Show incompleted tasks only
        </label>
        <input id="filter" type="checkbox" onChange={handleShowTask} />
      </div>
    </Fragment>
  );
};

export default TaskList;
