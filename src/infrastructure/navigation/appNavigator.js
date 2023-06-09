import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../../features/map/screens/mapScreen';

import { FavouritesContextProvider } from '../../services/favourites/favouriteContext';
import { LocationContextProvider } from '../../services/location/locationContext';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurantContext';

import { CartContextProvider } from '../../services/cart/cartContext';
import { CheckoutNavigator } from './checkoutNavigator';
import RestaurantsNavigator from './resTaurantNavigator';
import SettingsNavigator from './settingsNavigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'fast-food-outline',
  Map: 'map-outline',
  Checkout: 'cart-outline',
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={createScreenOptions}>
              <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
              <Tab.Screen name='Checkout' component={CheckoutNavigator} />
              <Tab.Screen name='Map' component={MapScreen} />
              <Tab.Screen name='Settings' component={SettingsNavigator} />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

export default AppNavigator;
