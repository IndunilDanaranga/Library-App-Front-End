import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Screen/Login';
import HomePage from './Screen/Home';
import RegistrationPage from './Screen/Register';
import BooksPage from './Screen/BooksPage';
import AdminLogin from './Screen/AdminLogin'
import UpdateBooksPage from './Screen/UpdateBookPage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name="BooksPage" component={BooksPage} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="UpdateBooksPage" component={UpdateBooksPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
