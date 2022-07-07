import React, { useState } from "react";

const ToDoTest = () => {
  const [newRegistration, setnewRegistration] = useState({
    taskName: "",
    duration: "",
  });
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setnewRegistration({ ...newRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecords([...records, newRegistration]);
    console.log(records, "before");

    setnewRegistration({ taskName: "", duration: "" });
  };

  return (
    <div className="flex justify-center items-center bg-blue-700 h-screen text-white text-lg fontse">
      <h1 className="text-black ">To List</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            onChange={handleInput}
            value={newRegistration.taskName}
            name="taskName"
            id="taskName"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Duration"
            value={newRegistration.duration}
            onChange={handleInput}
            name="duration"
            id="email"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add Task
          </button>
        </div>
      </form>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">index</th>
            <th scope="col">Task Name</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {records.map((curElement, index) => {
            const { taskName, duration } = curElement;
            return (
              <tr>
                <th scope="row">{index}</th>

                <td>{taskName}</td>
                <td>{duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTest;
