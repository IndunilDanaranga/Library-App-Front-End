import React, { useState } from 'react';
import { View, TextInput, Button,ImageBackground,StyleSheet,TouchableOpacity,Text,Alert } from 'react-native';

const LoginPage = ({ navigation, route }) => {
  const [email, setEmail] = useState(route.params?.email || '');
  const [password, setPassword] = useState(route.params?.password || '');

  const handleLogin = () => {
    // Validate user input and navigate to home page
    if (email && password) {
      Alert.alert('Login Success.');
      navigation.navigate('BooksPage');
    } else {
      Alert.alert('Email or Password incorrect !');
    }
  };
  const handleRegister = () => {
    navigation.navigate('RegistrationPage')
  }

  return (
    <ImageBackground style={styles.backgroundimage} source={require('../assets/Background.jpg')}>
        <View style={styles.container}>
        <Text style={styles.heading}>Registration</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRegister}
        style={styles.link}>
        <Text style={styles.linkText}>Don't have an Account? Register Here h
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AdminLogin')}
        style={styles.link}>
        <Text style={styles.linkText}>Admin </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundimage: {
    flex:1,
  },
  container:{
    alignSelf:'center',
    width:'80%',
  },
   heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop:200,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    alignSelf: 'center',
  },
  linkText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
export default LoginPage;
