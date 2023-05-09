import { createContext } from "react";

// create the context
export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  return (
    <FiltersContext.Provider value={{ category: "all", minPrice: 0 }}>
      {children}
    </FiltersContext.Provider>
  );
};
