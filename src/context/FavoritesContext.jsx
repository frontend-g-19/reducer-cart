import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}
