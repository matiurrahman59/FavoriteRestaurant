import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { FavouritesBar } from '../../../components/favourites/favouriteBarComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
import { FavouritesContext } from '../../../services/favourites/favouriteContext';
import { RestaurantsContext } from '../../../services/restaurants/restaurantContext';
import RestaurantInfo from '../components/restaurantInfo';
import Search from '../components/search';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { user } = useContext(AuthenticationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  console.log('--res--', user);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} size='large' color='tomato' />
        </LoadingContainer>
      )}

      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetails', { restaurant: item })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
