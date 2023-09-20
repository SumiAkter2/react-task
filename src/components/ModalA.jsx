import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalA = ({ onlyEven }) => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        `https://contact.mediusware.com/api-doc/?format=openapi`
      );
      const filteredContacts = onlyEven
        ? response.data.filter((contact) => contact.id % 2 === 0)
        : response.data.data;

      setContacts(filteredContacts);
      console.log(contacts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch contacts when the component mounts and whenever 'onlyEven' or 'searchQuery' changes
  useEffect(() => {
    fetchContacts();
  }, [onlyEven]);
  return (
    <div className="d-grid justify-content-center gap-3">
      <h1>From Modal A</h1>
      <br />
      <div className="d-flex justify-content-center gap-3">
        <button
          style={{ backgroundColor: "#46139f", color: "white" }}
          onClick={() => navigate("/modal-a")}
          className="btn btn-lg btn-outline-primary "
          type="button"
        >
          All Contacts
        </button>
        <button
          style={{ backgroundColor: "#ff7f50", color: "white" }}
          onClick={() => navigate("/modal-b")}
          className="btn btn-lg btn-outline-warning"
          type="button"
        >
          Us Contact
        </button>
        <button
          style={{
            backgroundColor: "#46139f",
            border: "#46139f",
            color: "white",
          }}
          onClick={() => navigate("/")}
          className="btn btn-lg btn-outline-warning"
          type="button"
        >
          Close
        </button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={onlyEven}
          onChange={() => setOnlyEven(!onlyEven)}
        />
        Only even
      </label>
      {/* <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ModalA;
