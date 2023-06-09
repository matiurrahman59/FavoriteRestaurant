import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/locationContext';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBox = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const onSubmit = () => {
    search(searchQuery);
  };

  return (
    <SearchContainer>
      <SearchBox
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmit}
        onIconPress={onFavoritesToggle}
        value={searchQuery}
        placeholder='Search for a location'
        icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
        mode='view'
        elevation={3}
        showDivider={false}
        inputStyle={{
          minHeight: 50,
          paddingVertical: 0,
        }}
      />
    </SearchContainer>
  );
};

export default Search;
