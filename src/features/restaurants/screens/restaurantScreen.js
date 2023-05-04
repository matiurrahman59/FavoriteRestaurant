import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { LocationContext } from '../../../services/location/locationContext';
import { RestaurantsContext } from '../../../services/restaurants/restaurantContext';
import RestaurantInfo from '../components/restaurantInfo';
import Search from '../components/search';

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
// `;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBox = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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

  return (
    <SafeArea>
      <Search />

      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} size='large' color='tomato' />
        </LoadingContainer>
      )}

      {!isLoading && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo navigation={navigation} restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantScreen;
