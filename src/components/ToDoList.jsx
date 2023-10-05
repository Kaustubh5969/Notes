import React, { useState } from "react";

function ToDoList(props) {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  function handleAdd() {
    if (task.trim() === "") return;
    setNewTask([...newTask, task]);
    setTask("");
  }

  function handledlt(index) {
    const updateTasks = [...newTask];
    updateTasks.splice(index, 1);
    setNewTask(updateTasks);
  }

  function startEditing(index) {
    setEditIndex(index);
    setEditTask(newTask[index]);
  }

  const saveEditTask = () => {
    if (editTask.trim() === "") return;
    const updattask = [...newTask];
    updattask[editIndex] = editTask;
    setNewTask(updattask);
    setEditIndex(null);
    setEditTask("");
  };

  const cancelEditTask = () => {
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <>
      <div className="container d-flex my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="btn btn-success ms-2" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div className="container">
        <ul className="list-unstyled">
          {newTask.map((tasks, index) => (
            <li
              className={`border bg-secondary bg-opacity-25 px-4 py-2 fs-4 my-3 rounded text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              key={index}
            >
              {editIndex === index ? (
                <div className="container">
                  <input
                    type="text"
                    className="form-control"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button
                    className="btn btn-success my-2"
                    onClick={saveEditTask}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={cancelEditTask}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <div className="row">
                    <div className="col-md-10 py-2">
                        <p className="text-justify">{tasks}</p>
                    </div>
                    <div className="col-md-2 py-2">
                      <button
                        className="btn btn-outline-primary float-end ms-2"
                        onClick={() => startEditing(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger float-end"
                        onClick={() => handledlt(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
