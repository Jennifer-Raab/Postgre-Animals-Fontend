import { Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import GattungsListe from "./Components/GattungsListe";
import logo from "./graphics/tierlexikon-logo.png";
import spendenbutton from "./graphics/spenden-button.png";
import Tierklassenliste from "./Components/Tierklassenliste";
import Animals from "./Components/Animals";
import Animal from "./Components/Animal";
import TierklassenNavigation from "./Components/TierklassenNavigation";

export default function App() {
  const [animals, setAnimals] = useState([]);

  const API = "https://postgre-animals-backend.onrender.com/animals";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="content">
        <header className="pad5vh">
          <div className="header-flex">
            <NavLink to="/">
              <img src={logo} alt="Tierlexikon" className="logo" />
            </NavLink>
            <NavLink className={"header-link"} to="/">
              Übersicht
            </NavLink>
            <img src={spendenbutton} alt="Spenden" className="button" />
          </div>
        </header>
        <main className="pad5vh">
          <Routes>
            <Route path="/" element={<Animals animals={animals} />} />
            <Route path="animal/:id" element={<Animal animals={animals} />} />
            <Route
              path="tierklassenliste/:suchwort"
              element={<Tierklassenliste animals={animals} />}
            />
            <Route
              path="gattung/:suchwort"
              element={<GattungsListe animals={animals} />}
            />
          </Routes>
        </main>
      </div>

      <footer className="pad5vh">
        <div className="footer-flex">
          <div>
            <h4>Tierklassen</h4>
            <TierklassenNavigation animals={animals} />
          </div>
          <div>
            <h4>&copy; Wild Animals</h4>
            <nav>
              <a href="/">Datenschutz</a>
              <a href="/">Impressum</a>
            </nav>
          </div>
          <div>
            <h4>Kontakt</h4>
            <nav>
              <a
                href="https://github.com/Jennifer-Raab"
                target="_blank"
                rel="noreferrer"
              >
                Jenny
              </a>
              <a
                href="https://github.com/rol423"
                target="_blank"
                rel="noreferrer"
              >
                Roland
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
