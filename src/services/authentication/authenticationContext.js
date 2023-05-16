import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
  user: Object,
  isLoading: Boolean,
  onLogin: (email, password) => {},
  onRegister: (email, password, repeatedPassword) => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const saveUser = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@user', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadUser = async () => {
    setIsLoading(true);
    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if (jsonValue) {
        setUser(JSON.parse(jsonValue));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    saveUser({ email, password });
    setUser({
      email,
      password,
    });
    setIsLoading(false);
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
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
