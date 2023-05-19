import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, List } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacerComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { CartContext } from '../../../services/cart/cartContext';
import RestaurantInfo from '../components/restaurantInfo';
import { OrderButton } from '../components/restaurantInfoStyles';

const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item
            title='Eggs Benedict'
            description='Description text for the list item or callback which returns a React element to display the description.'
          />
          <List.Item title='Classic Breakfast' />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Burger w/ Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom Soup' />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Spaghetti Bolognese' />
          <List.Item title='Veal Cutlet with Chicken Mushroom Rotini' />
          <List.Item title='Steak Frites' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Modelo' />
          <List.Item title='Coke' />
          <List.Item title='Fanta' />
        </List.Accordion>
      </ScrollView>

      <Spacer position='bottom' size='large'>
        <OrderButton
          mode='contained'
          onPress={() => {
            addToCart({ item: 'special', price: 1299 }, restaurant);
            navigation.navigate('Checkout');
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};

export default RestaurantDetailsScreen;
