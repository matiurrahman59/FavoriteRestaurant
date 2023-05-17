import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../authentication/authenticationContext';

export const FavouritesContext = createContext({
  favourites: [],
  addToFavourites: (el) => {},
  removeFromFavourites: (el) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavourites = async (value, user) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${user.email}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async (user) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${user.email}`);
      return jsonValue != null ? setFavourites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log('error loading', e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user);
    }
  }, [favourites, user]);

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
