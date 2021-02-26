import React from "react";

export const FavoritesContext = React.createContext(null);

export const FavoritesProvider = (props) => {
  return (
    <FavoritesContext.Provider value={"FavContxtPlaceholder"}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
