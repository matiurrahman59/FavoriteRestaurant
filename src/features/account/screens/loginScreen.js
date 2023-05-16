import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errText, setErrText] = useState('');
  const { onLogin, isLoading } = useContext(AuthenticationContext);

  const userSignIN = (email, password) => {
    if (!email || !password) {
      return setErrText('All field are required!');
    }

    if (!validator.validate(email)) {
      return setErrText('Enter valid email address!');
    }

    if (password.length <= 6) {
      return setErrText('Password must be at least 7 characters!');
    }

    onLogin(email, password);
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
              icon='lock-open-outline'
              mode='contained'
              onPress={() => userSignIN(email, password)}
            >
              Login
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

export default LoginScreen;
