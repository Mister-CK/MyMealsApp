import { createContext, useState } from "react";
import { MEALS } from "../../data/dummy-data";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setfavoriteMealIds] = useState([]);
  const addFavorite = (id) => {
    setfavoriteMealIds((currentIds) => [...currentIds, id]);
  };
  const removeFavorite = (id) => {
    setfavoriteMealIds((currentIds) =>
      currentIds.filter((mealId) => {
        mealId !== id;
      })
    );
  };
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
