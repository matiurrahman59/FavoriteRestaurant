import { Image, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: 30px;
`;

export const RestaurantCardImage = styled(Card.Cover)`
  padding-vertical: 10px;
  padding-horizontal: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SectionEnd = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
