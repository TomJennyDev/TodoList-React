import React, { Fragment } from "react";

const TaskItem = ({
  taskList,
  visibleTask,
  handleRemoveTask,
  handleChangeStatus,
}) => {
  const handTaskDone = (e, id) => {
    const checked = e.target.checked;
    handleChangeStatus(checked, id);
  };
  return (
    <Fragment>
      {taskList.map((task) => {
        console.log(task);
        let classNameLi = `${task.status ? "done" : ""} ${
          visibleTask && task.status ? "visible" : ""
        }`;

        return (
          <Fragment key={task.id}>
            <li className={classNameLi}>
              <span className="label">{task.taskName}</span>
              <div className="actions">
                <input
                  className="btn-action"
                  type="checkbox"
                  checked={task.status}
                  onChange={(e) => handTaskDone(e, task.id)}
                />
                <button
                  className="btn-action btn-action-delete"
                  name={task.id}
                  onClick={() => handleRemoveTask(task.id)}
                >
                  ✖
                </button>
              </div>
            </li>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default TaskItem;
