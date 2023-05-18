import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.email}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo && (
            <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor='#2182BD'
            />
          )}
        </TouchableOpacity>
        <Spacer position='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate('Favourite')}
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
