import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INIT_STATE = { nightMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { nightMode: !state.nightMode };
    default:
      return state;
  }
};

export const ThemeProvicer = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INIT_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
