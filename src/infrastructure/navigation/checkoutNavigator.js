import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const CheckoutStack = createStackNavigator();

import { CheckoutErrorScreen } from '../../features/checkout/screens/checkoutErrorScreen';
import CheckOutScreen from '../../features/checkout/screens/checkoutScreen';
import { CheckoutSuccessScreen } from '../../features/checkout/screens/checkoutSuccessScreen';

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator headerMode='none'>
    <CheckoutStack.Screen name='Checkout' component={CheckOutScreen} />
    <CheckoutStack.Screen
      name='CheckoutSuccess'
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name='CheckoutError'
      component={CheckoutErrorScreen}
    />
  </CheckoutStack.Navigator>
);
