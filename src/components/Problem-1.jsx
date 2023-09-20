import React, { useState } from "react";

const Problem1 = ({ onAddTask, tasks }) => {
  const [show, setShow] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && status.trim() !== "") {
      onAddTask({ name, status });
      setName("");
      setStatus("");
    }
  };

  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.status === "active") return -1;
    if (b.status === "active") return 1;
    if (a.status === "completed") return -1;
    if (b.status === "completed") return 1;
    return 0;
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleClick}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onBlur={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                onBlur={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                // onClick={() => handleClick("all")}
                onClick={() => setFilter("All")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                // onClick={() => handleClick("active")}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                // onClick={() => handleClick("completed")}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
