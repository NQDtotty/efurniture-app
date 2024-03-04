import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import AuthNavigation from './App/Navigations/AuthNavigation';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
  }, [isLoggedIn]);

  const [fontsLoaded] = useFonts({
    'fredoka': require('./assets/fonts/Fredoka-Regular.ttf'),
    'fredoka-medium': require('./assets/fonts/Fredoka-Medium.ttf'),
    'fredoka-bold': require('./assets/fonts/Fredoka-Bold.ttf')
  });

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {
          isLoggedIn === 'true' ? (
            <TabNavigation />
          ) : (
            <AuthNavigation />
          )
        }
      </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
});