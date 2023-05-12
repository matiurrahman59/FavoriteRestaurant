import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

import { SafeArea } from '../../components/utility/sareAreaComponent';
import MapScreen from '../../features/map/screens/mapScreen';
import RestaurantsNavigator from './resTaurantNavigator';

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'fast-food-outline',
  Map: 'map-outline',
  Settings: 'settings-outline',
};

const tabBarOptions = {
  // tabBarLabelPosition: 'beside-icon',
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarHideOnKeyboard: 'true',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    ...tabBarOptions,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions} headerMode='none'>
        <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
