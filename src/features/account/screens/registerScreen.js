import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Text } from '../../../components/typography/textComponent';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from '../components/accountStyles';

const validator = require('email-validator');

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errText, setErrText] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { onRegister, isLoading } = useContext(AuthenticationContext);

  const userRegister = (email, password, repeatPassword) => {
    if (!email || !password || !repeatPassword) {
      return setErrText('All field are required!');
    }

    if (!validator.validate(email)) {
      return setErrText('Enter valid email address!');
    }

    if (password.length <= 6 || repeatPassword.length <= 6) {
      return setErrText('Password must be at least 7 characters!');
    }

    if (password !== repeatPassword) {
      return setErrText('Password should be same!');
    }

    onRegister(email, password, repeatPassword);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label='E-mail'
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />
        <View
          style={{
            marginTop: 12,
          }}
        >
          <AuthInput
            label='Password'
            value={password}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View
          style={{
            marginTop: 12,
          }}
        >
          <AuthInput
            label='Repeat Password'
            value={repeatPassword}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            secure
            onChangeText={(text) => setRepeatPassword(text)}
          />
        </View>

        {errText && (
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text variant='error'>{errText}</Text>
          </View>
        )}

        <View
          style={{
            marginTop: 12,
          }}
        >
          {!isLoading ? (
            <AuthButton
              icon='email-outline'
              mode='contained'
              onPress={() => userRegister(email, password, repeatPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          )}
        </View>
      </AccountContainer>
      <View
        style={{
          marginTop: 12,
        }}
      >
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </View>
    </AccountBackground>
  );
};

export default RegisterScreen;
