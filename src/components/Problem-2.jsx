import React, { useState } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

const Problem2 = ({ onlyEven }) => {
  //   const [onlyEven, setOnlyEven] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={() => navigate("/modal-a")}
              className="btn btn-lg btn-outline-primary "
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={() => navigate("/modal-b")}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
     

      {/* <Routes>
        <Route
          path="modal-a"
          element={<ModalA onlyEven={onlyEven}></ModalA>}
        ></Route>
        <Route
          path="modal-b"
          element={<ModalB onlyEven={onlyEven}></ModalB>}
        ></Route>
      </Routes> */}
    </div>
  );
};

export default Problem2;
