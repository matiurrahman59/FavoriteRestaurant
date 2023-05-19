import React, { useContext, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { List } from 'react-native-paper';

import { Spacer } from '../../../components/spacer/spacerComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { CartContext } from '../../../services/cart/cartContext';
import RestaurantInfo from '../../restaurants/components/restaurantInfo';
import {
  CartIcon,
  CartIconContainer,
  ClearButton,
  NameInput,
  PayButton,
  PaymentProcessing,
} from '../components/checkoutStyles';
import { CreditCardInput } from '../components/creditCard';

const CheckOutScreen = ({ navigation }) => {
  const { restaurant, cart, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      navigation.navigate('CheckoutSuccess');
    }, 2000);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon='cart-off' />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position='left' size='medium'>
          <Spacer position='top' size='large'>
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return <List.Item key={i} title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label='Name'
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position='top' size='large'>
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate('CheckoutError', {
                  error: 'Something went wrong processing your credit card',
                })
              }
            />
          )}
        </Spacer>
        <Spacer position='top' size='xxl' />

        <PayButton
          disabled={isLoading}
          icon='cash'
          mode='contained'
          onPress={onPay}
          color='red'
        >
          Pay
        </PayButton>
        <Spacer position='top' size='large'>
          <ClearButton
            disabled={isLoading}
            icon='cart-off'
            mode='contained'
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </Spacer>
        <Spacer position='top' size='xxl' />
      </ScrollView>
    </SafeArea>
  );
};

export default CheckOutScreen;
