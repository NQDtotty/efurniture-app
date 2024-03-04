import { Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/ProfileScreen/Profile';
import Service from '../Screens/ServiceScreen/Service';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Color from '../Utils/Color';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Color.PRIMARY
    }}>
      <Tab.Screen
        name='home'
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='service'
        component={Service}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: -7 }}>Service</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='design-services' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 12, marginTop: -7 }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='user' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}