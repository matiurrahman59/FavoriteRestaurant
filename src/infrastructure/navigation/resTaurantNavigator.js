import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import RestaurantDetailsScreen from '../../features/restaurants/screens/restaurantDetailsScreen';
import RestaurantScreen from '../../features/restaurants/screens/restaurantScreen';

const RestaurantStack = createStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name='Restaurant' component={RestaurantScreen} />
      <RestaurantStack.Screen
        name='RestaurantDetails'
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
}
