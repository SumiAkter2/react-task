import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalB = ({ onlyEven, closeModal }) => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://contact.mediusware.com/api/contact?country=US&even=${onlyEven}&query=${searchQuery}`
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, onlyEven]);
  return (
    <div className="modal">
      <button onClick={closeModal}>Close</button>
      <button onClick={() => closeModal()}>All Contacts</button>
      <button onClick={() => setSearchQuery("")}>US Contacts</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModalB;
