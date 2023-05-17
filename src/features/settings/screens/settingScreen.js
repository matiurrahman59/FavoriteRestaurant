import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { Avatar, List } from 'react-native-paper';

import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacerComponent';
import { SafeArea } from '../../../components/utility/sareAreaComponent';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
        <Spacer position='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title='Logout'
          left={(props) => <List.Icon {...props} color='black' icon='door' />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingScreen;
