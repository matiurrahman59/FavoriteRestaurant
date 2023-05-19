import React from 'react';

import { Text } from '../../../components/typography/textComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { colors } from '../../../infrastructure/theme/colors';
import { CartIcon, CartIconContainer } from '../components/checkoutStyles';

export const CheckoutErrorScreen = ({ route }) => {
  const { error = '' } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon='close' bg={colors.ui.error} />
        <Text variant='label'>{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
