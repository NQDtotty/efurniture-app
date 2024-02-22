import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Welcome from './App/Screens/LoginScreen/Welcome';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Config from 'react-native-config';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import AuthNavigation from './App/Navigations/AuthNavigation';
import { useFonts } from 'expo-font';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'fredoka': require('./assets/fonts/Fredoka-Regular.ttf'),
    'fredoka-medium': require('./assets/fonts/Fredoka-Medium.ttf'),
    'fredoka-bold': require('./assets/fonts/Fredoka-Bold.ttf')
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={'pk_test_aW1tdW5lLWFudGVsb3BlLTc1LmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <View style={styles.container}>

        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <NavigationContainer>
            <AuthNavigation />
          </NavigationContainer>
        </SignedOut>

        <StatusBar style='auto' />
      </View>
    </ClerkProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  }
});