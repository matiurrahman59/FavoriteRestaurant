import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const HomeImage = require('../../../../assets/home_bg.jpg');

const BackgroundImage = () => {
  return (
    <ImageBackground style={styles.image} source={HomeImage}>
      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
