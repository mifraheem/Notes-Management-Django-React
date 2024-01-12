import axios from "axios";
import { useReducer, createContext, useEffect } from "react";

export const NotesListContext = createContext({
  notesList: [],
  addNote: () => {},
  deleteNote: () => {},
});
const notesListReducer = (currentNoteslist, action) => {
  let newNotesList = currentNoteslist;
  if (action.type === "DELETE-NOTE") {
    axios.delete(`http://127.0.0.1:8000/deleteNote/${action.payload.noteId}`);
    newNotesList = currentNoteslist.filter(
      (note) => note.id != action.payload.noteId
    );
  } else if (action.type === "ADD-NOTE") {
    newNotesList = [action.payload, ...currentNoteslist];
    axios
      .post("http://127.0.0.1:8000/postNote", {
        title: action.payload.title,
        content: action.payload.content,
      })
      .then((res) => {
        console.log(res.data.payload);
        newNotesList[0].id = res.data.payload.id;
      });
  }
  return newNotesList;
};
export default function NotesListProvider({ children }) {
  const [notesList, dispatchNotesList] = useReducer(
    notesListReducer,
    DEFAULT_NOTES_LIST
  );

  const addNote = (title, body) => {
    dispatchNotesList({
      type: "ADD-NOTE",
      payload: {
        id: Date.now(),
        title: title,
        content: body,
      },
    });
  };

  const deleteNote = (noteId) => {
    dispatchNotesList({
      type: "DELETE-NOTE",
      payload: {
        noteId,
      },
    });
  };

  return (
    <NotesListContext.Provider value={{ notesList, addNote, deleteNote }}>
      {children}
    </NotesListContext.Provider>
  );
}

let DEFAULT_NOTES_LIST = [];

async function getAllBooks() {
  try {
    const books = await axios.get("http://127.0.0.1:8000/");

    DEFAULT_NOTES_LIST = books.data.payload;
  } catch (errors) {
    console.log(errors);
  }
}
getAllBooks();
