import 'react-native-gesture-handler';

import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from '@expo-google-fonts/oswald';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { Navigator } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { FavouritesContextProvider } from './src/services/favourites/favouriteContext';
import { LocationContextProvider } from './src/services/location/locationContext';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurantContext';

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
