import { SvgXml } from 'react-native-svg';

import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Text } from '../../../components/typography/textComponent';

import {
  Address,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardImage,
  Section,
  SectionEnd,
} from './restaurantInfoStyles';

const RestaurantInfo = ({ restaurant = {}, navigation }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard onPress={() => navigation.navigate('details')}>
      <RestaurantCardImage source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={24}
                height={24}
              />
            ))}
          </Rating>

          {isClosedTemporarily && (
            <SectionEnd>
              <Text variant='error'>CLOSED TEMPORARILY</Text>
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          )}
          {isOpenNow && <SvgXml xml={open} width={34} height={34} />}
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;

{
  /* <Icon name='star' color='yellow' size={24} /> */
}
