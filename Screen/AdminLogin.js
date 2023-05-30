import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground,Alert } from 'react-native';

const AdminLoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log(`Logging in with username: ${username} and password: ${password}`);
    if(username=='dana' && password=='12345')
    {
      Alert.alert('Login Successfully');
      navigation.navigate('UpdateBooksPage');
    }else
    {
      Alert.alert('Username or Password Incorrect');
    }
  };

  return (
    
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundimage}>
    <View style={styles.container}>
      <Text style={styles.heading}>Admin Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
});

export default AdminLoginPage;