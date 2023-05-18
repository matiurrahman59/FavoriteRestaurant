import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';
import { useContext, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.email}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {hasPermission ? (
        <Camera
          style={{ flex: 1 }}
          ref={(ref) => setCameraRef(ref)}
          type={Camera.Constants.Type.front}
        />
      ) : (
        <Text>No access to camera</Text>
      )}
      <Button title='Take Picture' onPress={takePicture} />
    </View>
  );
};

export default CameraScreen;
