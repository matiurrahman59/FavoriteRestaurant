import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import { AccountNavigator } from './accountNavigator';
import AppNavigator from './appNavigator';

export const Navigator = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
