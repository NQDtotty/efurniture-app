import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Color from "../../Utils/Color";
import Field from "../../Utils/Field";
import { loginWithEmail } from "./../../api/auth";
import axios from "axios";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [listErr, setListErr] = React.useState([]);

  const onSignInPress = async () => {
    const errors = [];
    if (email.length === 0) errors.push('email');
    if (password.length === 0) errors.push('password');

    if (errors.length) {
      setListErr(errors);
      return;
    }
    setListErr(errors);

    if (!isLoaded) {
      return;
    }

    try {
      const payload = { email, password };
      const data = await axios({
        url: "https://api.caucalamdev.io.vn/auth/login",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: payload
      });
      // const result = await loginWithEmail(payload);

      // const completeSignIn = await signIn.create({
      //   identifier: email,
      //   password,
      // });
      // // This is an important step,
      // // This indicates the user is signed in
      // await setActive({ session: completeSignIn.createdSessionId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ paddingTop: 30 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color='black' />
        <Text style={{ fontSize: 25, fontFamily: 'fredoka-medium' }}>Back</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', width: '100%' }}>
        <Text style={{
          color: Color.PRIMARY,
          fontSize: 40,
          fontWeight: 'bold',
          marginVertical: 40,
          fontFamily: 'fredoka-medium'
        }}>Sign In</Text>
      </View>

      <View style={{
        backgroundColor: Color.PRIMARY,
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 130,
        paddingTop: 100,
        alignItems: 'center'
      }}>
        <Text style={{ color: Color.WHITE, fontSize: 30, fontFamily: 'fredoka-medium', fontWeight: 'bold', marginBottom: 40 }}>Enter to your account</Text>
        <Field placeholder='Email' value={email} onChangeText={email => setEmail(email)} />
        <View style={{ marginTop: 5, display: listErr.includes('email') ? 'flex' : 'none' }}>
          <Text style={{ color: 'red' }}>Email is required!</Text>
        </View>

        <Field placeholder='Password' secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} />
        <View style={{ marginTop: 5, display: listErr.includes('password') ? 'flex' : 'none' }}>
          <Text style={{ color: 'red' }}>Password is required!</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onSignInPress}>
          <Text style={{ textAlign: 'center', fontSize: 20, color: Color.PRIMARY, fontFamily: 'fredoka-medium' }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  button: {
    marginTop: 70,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Color.FOURTH,
    borderRadius: 99
  }
});