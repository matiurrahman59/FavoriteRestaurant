import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../typography/textComponent';

const Image = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image
        source={{ uri: restaurant.photos[0] }}
        style={{
          width: 120,
          height: 100,
        }}
      />
      <Text center variant='caption' numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
