import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
// import ModalC from "./ModalC";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={() => setShowModalA(true)}
              className="btn btn-lg btn-outline-primary"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={() => setShowModalB(true)}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {showModalA && (
        <ModalA onlyEven={onlyEven} closeModal={() => setShowModalA(false)} />
      )}
      {showModalB && (
        <ModalB onlyEven={onlyEven} closeModal={() => setShowModalB(false)} />
      )}
      <div>
        <label>
          <input
            type="checkbox"
            checked={onlyEven}
            onChange={() => setOnlyEven(!onlyEven)}
          />
          Only even
        </label>
      </div>
    </div>
  );
};

export default Problem2;
