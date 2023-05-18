import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CameraScreen from '../../features/settings/screens/cameraScreen';
import FavouriteScreen from '../../features/settings/screens/favouriteScreen';
import SettingScreen from '../../features/settings/screens/settingScreen';

const SettingsStack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name='Setting' component={SettingScreen} />
      <SettingsStack.Screen name='Favourite' component={FavouriteScreen} />
      <SettingsStack.Screen name='Camera' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
