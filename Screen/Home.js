import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
        <Text style={styles.descriptionText}>Welcome Library App!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started !</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor:'#88C8CB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
