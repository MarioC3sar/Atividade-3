import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bem-vindo à Mega-Sena</h1>
      <button onClick={() => navigate("/palpites")}>Clique para começar</button>
    </div>
  );
};

export default Home;