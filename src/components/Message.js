import React from "react";

const Message = ({ messages, deleteMessage }) => {
  return (
    <>
      {messages.map(message => (
        <>
          <div className="form-group container mb-3 pt-3">
            <div className="font-weight-normal mb-2">{message.title}</div>
            <div className="font-weight-light mb-2">{message.message}</div>
            <div className="font-weight-light mb-2">{Date(Date.now())}</div>
            <button onClick={() => deleteMessage(message.title)}>delete</button>
          </div>
        </>
      ))}
    </>
  );
};

export default Message;
