import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [formData, setFormData] = useState({
    taskName: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        setErrorMessage("Please input name of task !!!!!");
      } else {
        addTask(formData);
      }
    });
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const newFormData = { ...formData, taskName: value };
    setFormData(newFormData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="newitem">Add to the todo list</label>
      <input
        type="text"
        id="newitem"
        name="taskName"
        value={formData.taskName}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <button type="submit">Add item</button>
      <p style={{ textAlign: "center", width: "100%" }}>{errorMessage}</p>
    </form>
  );
};

export default Form;
