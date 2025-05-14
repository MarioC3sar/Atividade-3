import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PalpitesProvider } from "./context/PalpitesContext";
import Home from "./components/Home";
import Palpites from "./components/Palpites";
import Historico from "./components/Historico";
import "./App.css";

const App = () => {
  return (
    <PalpitesProvider>
      <Router>
        <nav>
          <Link to="/">Início</Link> | <Link to="/palpites">Palpites</Link> |{" "}
          <Link to="/historico">Histórico</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpites" element={<Palpites />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Router>
    </PalpitesProvider>
  );
};

export default App;
