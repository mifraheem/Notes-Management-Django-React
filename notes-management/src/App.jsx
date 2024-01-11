import "./App.css";
import AboutMe from "./components/AboutMe";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import Header from "./components/Header";
import WelcomeMessage from "./components/WelcomeMessage";
import NotesListProvider from "./store/notes-store-context";
import { useState } from "react";
function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  return (
    <>
      <NotesListProvider>
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {currentTab === "Home" && <AllNotes />}
        {currentTab === "Add-Note" && <AddNote />}
        {currentTab === "about" && <AboutMe />}
      </NotesListProvider>
    </>
  );
}

export default App;
