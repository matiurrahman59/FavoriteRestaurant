import React from 'react';
import { Text, View } from 'react-native';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { CreditCardInput } from '../components/creditCard';

const CheckOutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};

export default CheckOutScreen;
