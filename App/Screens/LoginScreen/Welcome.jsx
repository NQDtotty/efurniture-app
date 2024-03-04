import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Color from '../../Utils/Color';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function Welcome() {
  const navigation = useNavigation();
  
  useWarmUpBrowser();

  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('./../../../assets/images/login.jpg')} style={styles.loginImage} />

      <View style={styles.subContainer}>
        <Text style={{
          fontSize: 27,
          color: Color.WHITE,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'fredoka-medium',
          marginBottom: 60
        }}>Welcome To eFurniture App</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.push('auth')}>
          <Text style={{ textAlign: 'center', fontSize: 17, color: Color.PRIMARY, fontFamily: 'fredoka-medium' }}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{
          fontSize: 18,
          color: Color.WHITE,
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'fredoka-medium',
          margin: 13
        }}>Or</Text>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={{ textAlign: 'center', fontSize: 17, color: Color.PRIMARY, fontFamily: 'fredoka-medium' }}>
            Continue With Google
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  loginImage: {
    width: 330,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Color.BLACK,
    borderRadius: 15
  },
  subContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: Color.PRIMARY,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20
  },
  button: {
    padding: 15,
    backgroundColor: Color.LIGHT_GRAY,
    borderRadius: 99,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  }
});