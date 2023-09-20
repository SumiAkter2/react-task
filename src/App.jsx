import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import { useState } from "react";
import ModalA from "./components/ModalA.jsx";
import ModalB from "./components/ModalB.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [onlyEven, setOnlyEven] = useState(false);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route
            path="problem-1"
            element={<Problem1 onAddTask={addTask} tasks={tasks} />}
          />
          <Route
            path="problem-2"
            onlyEven={onlyEven}
            element={<Problem2 />}
          ></Route>
        </Route>
        <Route
          path="modal-a"
          element={<ModalA onlyEven={onlyEven}></ModalA>}
        ></Route>
        <Route
          path="modal-b"
          element={<ModalB onlyEven={onlyEven}></ModalB>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
