import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function HeaderImage() {
  return (
    <ImageBackground
      source={require('../assets/banner.png')}
      style={styles.image}
      resizeMode='cover'
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 120,
  },
});
