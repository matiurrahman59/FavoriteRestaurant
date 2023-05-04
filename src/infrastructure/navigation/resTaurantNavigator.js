import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import RestaurantScreen from '../../features/restaurants/screens/restaurantScreen';

const RenderNothing = ({ navigation }) => {
  return (
    <View>
      <Text>Item Details Page</Text>
      <Button
        title='Go to Home Page'
        onPress={() => navigation.navigate('Restaurant')}
      />
    </View>
  );
};

const RestaurantStack = createStackNavigator();

export default function RestaurantsNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name='Restaurant' component={RestaurantScreen} />
      <RestaurantStack.Screen name='details' component={RenderNothing} />
    </RestaurantStack.Navigator>
  );
}
