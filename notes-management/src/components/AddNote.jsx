import React, { useContext, useRef } from "react";
import { NotesListContext } from "../store/notes-store-context";
export default function AddNote() {
  let title = useRef("");
  let body = useRef("");

  const { addNote } = useContext(NotesListContext);

  const submitForm = (event) => {
    event.preventDefault();
    addNote(title.current.value, body.current.value);
    title.current.value = "";
    body.current.value = "";
  };

  return (
    <form
      className="container col-lg-6"
      style={{ width: "", margin: "auto" }}
      onSubmit={(event) => submitForm(event)}
    >
      <div className="mb-3">
        <label htmlFor="topic-name" className="form-label">
          Topic Name
        </label>
        <input
          ref={title}
          type="text"
          className="form-control"
          id="topic-name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="note-body" className="form-label">
          Topic Detail
        </label>
        <textarea ref={body} className="form-control" id="note-body" />
      </div>
      <center>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </center>
    </form>
  );
}
