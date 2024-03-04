import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Screens/LoginScreen/Welcome';
import SignIn from '../Screens/LoginScreen/SignIn';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="auth" component={SignIn} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  )
}