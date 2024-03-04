import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Color from '../../Utils/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAccountById } from '../../api/user';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigation();
  
  async function getUser() {
    const token = await AsyncStorage.getItem('token');
    const userId = await AsyncStorage.getItem('userId');
    console.log(userId)

    const data = await getAccountById(userId, token);
    setUser(data.data);
  }
  
  async function logout() {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    await AsyncStorage.setItem('token', '');
    await AsyncStorage.setItem('user', null);
    await AsyncStorage.setItem('userId', '');

    navigate.navigate('/auth');
  }

  useEffect(() => {
    getUser();
  }, []);

  const profileMenu = [
    {
      name: 'My Profile',
      icon: 'human-greeting-variant'
    },
    {
      name: 'Application Update',
      icon: 'update'
    },
    {
      name: 'Settings',
      icon: 'account-settings'
    },
    {
      name: 'Support',
      icon: 'contacts'
    },
    {
      name: 'FAQ',
      icon: 'account-question'
    },
    {
      name: 'Logout',
      icon: 'logout'
    }
  ];
  const [option, setOption] = useState(0);

  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    console.log(user)
    if (option === 1) {

    } else if (option === 2) {

    } else if (option === 3) {

    } else if (option === 4) {

    } else if (option === 5) {
      logout();
    }
  }, [option]);

  return (
    <View>
      <View style={{ padding: 20, paddingTop: 30, marginTop: 10, backgroundColor: Color.PRIMARY }}>
        <Text style={{ fontSize: 20, fontFamily: 'fredoka-bold', color: Color.LIGHT_GRAY }}>Profile</Text>

        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20
        }}>
          <Image source={{ }} style={{ width: 90, height: 90, borderRadius: 99 }} />

          {/* Name */}
          <Text style={{
            fontSize: 26,
            fontFamily: 'fredoka-medium',
            color: Color.LIGHT_GRAY,
            marginTop: 8,
            textAlign: 'center'
          }}>
            {user?.profile.name}
          </Text>

          {/* Email Address */}
          <Text style={{
            fontSize: 18,
            fontFamily: 'fredoka',
            color: Color.LIGHT_GRAY,
            marginTop: 8
          }}>
            {user?.email}
          </Text>
        </View>
      </View>

      <View>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              margin: 18
            }} onPress={() => setOption(index)}>
              <MaterialCommunityIcons name={item.icon} size={24} color={Color.PRIMARY} />
              <Text style={{ fontFamily: 'fredoka', fontSize: 16 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        marginVertical: 'auto'
      }}>
        <Text style={{ fontFamily: 'fredoka', margin: 6, color: '#808080' }}>eFurniture Version 1.0.0</Text>
        <Text style={{ fontFamily: 'fredoka', color: '#808080' }}>Copyright @ Nguyen Thoai</Text>
      </View>
    </View>
  )
}