import React, { useContext } from "react";

import { MdDelete } from "react-icons/md";
import { NotesListContext } from "../store/notes-store-context";

export default function Note({ note }) {
  let { deleteNote } = useContext(NotesListContext);

  return (
    <div className="card" style={{ width: "18rem", margin: "25px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {note.topicName}
          <span
            onClick={() => deleteNote(note.id)}
            style={{
              cursor: "pointer",
              margin: "20px 0px 0px -20px",
            }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{note.topicDetails}</p>
      </div>
    </div>
  );
}
