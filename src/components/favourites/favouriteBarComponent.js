import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { CompactRestaurantInfo } from '../restaurant/compactRestaurantInfo';
import { Text } from '../typography/textComponent';

const FavouritesWrapper = styled.View`
  margin-left: 16px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <View>
        <Text variant='caption'>Favourites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View
              key={key}
              style={{
                marginRight: 10,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetails', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
