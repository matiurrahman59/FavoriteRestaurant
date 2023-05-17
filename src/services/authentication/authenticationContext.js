import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
  user: Object,
  isLoading: Boolean,
  onLogin: (email, password) => {},
  onRegister: (email, password, repeatedPassword) => {},
  isAuthenticated: Boolean,
  onLogout: () => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@user', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue) {
        setIsAuthenticated(true);
        setUser(JSON.parse(jsonValue));
      } else {
        setIsAuthenticated(false);
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const onLogin = (email, password) => {
    saveUser({ email, password });
    setUser({
      email,
      password,
    });
  };

  const onLogout = () => {
    setUser(null);
  };

  const onRegister = (email, password, repeatedPassword) => {
    onLogin(email, password);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
