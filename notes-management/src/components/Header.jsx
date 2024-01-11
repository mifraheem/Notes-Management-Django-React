import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header({ currentTab, setCurrentTab }) {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${currentTab === "Home" && "active"}`}
              onClick={() => setCurrentTab("Home")}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${currentTab === "Add-Note" && "active"}`}
              onClick={() => setCurrentTab("Add-Note")}
            >
              Add Notes
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${currentTab === "about" && "active"}`}
              onClick={() => setCurrentTab("about")}
            >
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
