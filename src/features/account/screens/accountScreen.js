import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { View } from 'react-native';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../components/accountStyles';

const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <AccountBackground>
      <AccountCover />
      <View
        style={{
          position: 'absolute',
          top: 30,
          width: '100%',
          height: '40%',
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          resizeMode='cover'
          source={require('../../../../assets/watermelon.json')}
        />
      </View>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <View style={{ marginTop: 12 }}>
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </View>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
