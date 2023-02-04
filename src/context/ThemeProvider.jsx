import { createContext, useContext, useState } from "react";

export const ThemesContext = createContext();
export const useTodoContext = () => useContext(ThemesContext);
export const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");
  const setBlack = () => {
    setTheme("black");
  };
  const setWhite = () => {
    setTheme("white");
  };
  const contextValue = {
    theme,
    setBlack,
    setWhite,
  };

  return (
    <ThemesContext.Provider value={contextValue}>
      {children}
    </ThemesContext.Provider>
  );
};


