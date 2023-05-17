import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FavouriteScreen from '../../features/settings/screens/favouriteScreen';
import SettingScreen from '../../features/settings/screens/settingScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Settings' component={SettingScreen} />
      <SettingsStack.Screen name='Favourites' component={FavouriteScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
