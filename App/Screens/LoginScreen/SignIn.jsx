import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Color from "../../Utils/Color";
import Field from "../../Utils/Field";
import { loginWithEmail } from "./../../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
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

    try {
      const payload = { email, password };
      const data = await loginWithEmail(payload);

      if (data.statusCode === 201) {
        const { id: profileId, name, phone, user_id: userId  } = data.data.profile.profile;
        const { email, role } = data.data.profile.user;
        const inforUser = Object.create(null);
        inforUser.profileId = profileId;
        inforUser.name = name;
        inforUser.phone = phone;
        inforUser.userId = userId;
        inforUser.email = email;
        inforUser.role = role;
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('token', data.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(inforUser));
        await AsyncStorage.setItem('userId', userId);

        navigation.navigate('Home');
      } else if (data.statusCode === 400) {
        errors.push('invalid');
        setListErr(errors);
        return;
      } else if (data.statusCode === 500) {
        errors.push('err');
        setListErr(errors);
        return;
      }
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

        <View style={{ marginTop: 12, display: listErr.includes('err') ? 'flex' : 'none' }}>
          <Text style={{ color: 'red' }}>Some Thing Went Wrong !</Text>
        </View>

        <View style={{ marginTop: 12, display: listErr.includes('invalid') ? 'flex' : 'none' }}>
          <Text style={{ color: 'red' }}>Account info is not valid</Text>
        </View>
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