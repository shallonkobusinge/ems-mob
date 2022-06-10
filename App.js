import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RegisterEmployee from './src/screens/RegisterEmployee';
import ViewEmployees from './src/screens/ViewEmployees';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: 'Login',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Welcome',
            headerShown: false
          }}


        />


        <Stack.Screen
          name="RegisterEmployee"
          component={RegisterEmployee}
        />
        <Stack.Screen
          name="ViewEmployees"
          component={ViewEmployees}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
