import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import RestaurantScreen from './src/features/restaurants/screens/restaurantScreen';
import { theme } from './src/infrastructure/theme';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}
function Map() {
  return (
    <View>
      <Text>Map!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldFontLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoFontLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldFontLoaded || !latoFontLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabelPosition: 'beside-icon',
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',

              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = 'fast-food-outline';
                } else if (route.name === 'Map') {
                  iconName = 'map-outline';
                } else {
                  iconName = 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name='Restaurants' component={RestaurantScreen} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
