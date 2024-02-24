import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home';
import DeliveryListByCategory from '../Screens/DeliveryList/DeliveryListByCategory';
import DeliveryDetails from '../Screens/DeliveryList/DeliveryDetails';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="delivery-list" component={DeliveryListByCategory} />
      <Stack.Screen name="delivery-details" component={DeliveryDetails} />
    </Stack.Navigator>
  )
}