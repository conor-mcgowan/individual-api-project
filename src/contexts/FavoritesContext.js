import React from "react";

// const initialState = [];

export const FavoritesContext = React.createContext(null);

export const FavoritesProvider = (props) => {
  // const favorites =
  return (
    <FavoritesContext.Provider value={"FavContextPlaceholder"}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
