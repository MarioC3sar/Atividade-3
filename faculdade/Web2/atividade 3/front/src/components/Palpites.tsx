import React, { useContext, useEffect } from "react";
import { PalpitesContext } from "../context/PalpitesContext";
import "./Palpites.css"; // Importar o arquivo CSS

const Palpites = () => {
  const context = useContext(PalpitesContext);

  useEffect(() => {
    if (context) {
      context.gerarPalpites(); // Gera uma sugestão automaticamente ao carregar a página
    }
  }, []); // Dependência vazia para evitar loops infinitos

  if (!context) {
    return <div>Erro: Contexto não encontrado</div>;
  }

  const { palpites, gerarPalpites } = context;

  return (
    <div>
      <h1>Seus Palpites</h1>
      <ul className="palpites-list">
        {palpites.map((numero, index) => (
          <li key={index} className="palpite-circle">
            {numero}
          </li>
        ))}
      </ul>
      <button onClick={gerarPalpites}>Nova sugestão</button>{" "}
      {/* Botão para gerar nova aposta */}
    </div>
  );
};

export default Palpites;
