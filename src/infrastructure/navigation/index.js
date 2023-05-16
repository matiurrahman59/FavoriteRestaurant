import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import { AccountNavigator } from './accountNavigator';
import AppNavigator from './appNavigator';

export const Navigator = () => {
  const { user, isLoading } = useContext(AuthenticationContext);

  console.log('---1---index', user);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
