import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity,Alert,ImageBackground,StyleSheet,Text } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      Alert.alert('Registration Success.');
      navigation.navigate('Login', { email, password });
    } else {
      Alert.alert('Please enter valid email and matching passwords !');
    }
  };

  return (
    <ImageBackground style={styles.backgroundimage} source={require('../assets/Background.jpg')}>
    <View style={styles.container}>
    <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Login </Text>
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
export default RegistrationPage;
