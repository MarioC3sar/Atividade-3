import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

interface PalpitesContextType {
  palpites: number[];
  historico: number[][];
  gerarPalpites: () => void;
}

export const PalpitesContext = createContext<PalpitesContextType | undefined>(
  undefined
);

export const PalpitesProvider = ({ children }: { children: ReactNode }) => {
  const [palpites, setPalpites] = useState<number[]>([]);
  const [historico, setHistorico] = useState<number[][]>([]);

  const gerarPalpites = () => {
    const numeros = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 60) + 1
    );
    setPalpites(numeros);
    setHistorico((prevHistorico) => [...prevHistorico, numeros]);
  };

  return (
    <PalpitesContext.Provider value={{ palpites, historico, gerarPalpites }}>
      {children}
    </PalpitesContext.Provider>
  );
};
