import React from "react";

const Form = props => {
  return (
    <div className="container bg-light p-3 mb-2">
      <div className="font-weight-bold mb-3">Add New Log</div>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="title"
            value={props.newTitle}
            placeholder=" Log Title"
            onChange={props.handleTitleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder=" Log Message"
            name="message"
            value={props.newMessage}
            onChange={props.handleMessageChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit Log
        </button>
      </form>
    </div>
  );
};

export default Form;
