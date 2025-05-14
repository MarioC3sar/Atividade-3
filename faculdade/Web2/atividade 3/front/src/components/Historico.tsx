import React, { useContext } from "react";
import { PalpitesContext } from "../context/PalpitesContext";
import "./Historico.css"; // Importar o arquivo CSS

const Historico = () => {
  const context = useContext(PalpitesContext);

  if (!context) {
    return <div>Erro: Contexto não encontrado</div>;
  }

  const { historico } = context;

  return (
    <div>
      <h1>Histórico de Palpites</h1>
      {historico.length === 0 ? (
        <p>Nenhum palpite gerado até o momento.</p>
      ) : (
        <ul className="historico-list">
          {historico.map((palpite, index) => (
            <li key={index}>
              <h3>Palpite {index + 1}</h3>
              <ul className="palpites-list">
                {palpite.map((numero, i) => (
                  <li key={i} className="palpite-circle">
                    {numero}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historico;
