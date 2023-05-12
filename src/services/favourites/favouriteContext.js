import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  favourites: [],
  addToFavourites: (el) => {},
  removeFromFavourites: (el) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (el) => el.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
