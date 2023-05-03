import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfo from '../components/restaurantInfo';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

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

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SearchContainer>
        <SearchBox
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode='view'
          elevation={3}
          showDivider={false}
          inputStyle={{
            minHeight: 50,
            paddingVertical: 0,
          }}
        />
      </SearchContainer>

      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

export default RestaurantScreen;
