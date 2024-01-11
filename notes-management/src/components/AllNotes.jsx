import React, { useContext } from "react";
import Note from "./Note";
import { NotesListContext } from "../store/notes-store-context";
import WelcomeMessage from "./WelcomeMessage";

export default function AllNotes() {
  let { notesList } = useContext(NotesListContext);
  // console.log(notesList.length);

  return (
    <div className="container">
      <div className="row">
        {notesList.length === 0 && <WelcomeMessage />}
        {notesList.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
}
