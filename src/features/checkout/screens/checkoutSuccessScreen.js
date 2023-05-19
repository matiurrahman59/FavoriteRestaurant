import React from 'react';

import { Text } from '../../../components/typography/textComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { CartIcon, CartIconContainer } from '../components/checkoutStyles';

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon='check-bold' />
      <Text variant='label'>Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
