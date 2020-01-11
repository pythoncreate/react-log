import React, { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Message from "./components/Message";
import "./App.css";

const App = props => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [filter, setFilter] = useState("");

  const handleTitleChange = event => setNewTitle(event.target.value);
  const handleMessageChange = event => setNewMessage(event.target.value);
  const handleFilterChange = event => setFilter(event.target.value);

  const resetForm = () => {
    setNewTitle("");
    setNewMessage("");
  };

  const handleSubmit = event => {
    event.preventDefault();
    const createdMessage = { title: newTitle, message: newMessage };
    setMessages(messages.concat(createdMessage));
    resetForm();
  };

  const deleteMessage = title => {
    const message = messages.find(p => p.title === title);
    setMessages(messages.filter(p => p.title !== title));
  };

  const messagesToShow =
    filter.length === 0
      ? messages
      : messages.filter(p =>
          p.title.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <>
      <div>
        <Filter handleChange={handleFilterChange} value={filter} />
        <Form
          handleTitleChange={handleTitleChange}
          handleMessageChange={handleMessageChange}
          handleSubmit={handleSubmit}
          newTitle={newTitle}
          newMessage={newMessage}
        />
      </div>
      <div class="container bg-light">
        <Message messages={messagesToShow} deleteMessage={deleteMessage} />
      </div>
    </>
  );
};

export default App;
