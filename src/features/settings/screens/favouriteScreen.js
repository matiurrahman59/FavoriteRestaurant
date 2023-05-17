import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styled from 'styled-components';
import { FavouritesContext } from '../../../services/favourites/favouriteContext';
import RestaurantInfo from '../../restaurants/components/restaurantInfo';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <View style={styles.mainContainer}>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
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
      ) : (
        <View style={styles.container}>
          <Text>No favourites yet! 😢</Text>
        </View>
      )}
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
