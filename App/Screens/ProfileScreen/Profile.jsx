import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import Color from '../../Utils/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from "@clerk/clerk-expo";

export default function Profile() {
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
  const { user } = useUser();
  const [option, setOption] = useState(0);

  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  useEffect(() => {
    if (option === 1) {

    } else if (option === 2) {

    } else if (option === 3) {

    } else if (option === 4) {

    } else if (option === 5) {
      signOut();
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
          <Image source={{ uri: user.imageUrl }} style={{ width: 90, height: 90, borderRadius: 99 }} />

          {/* Name */}
          <Text style={{
            fontSize: 26,
            fontFamily: 'fredoka-medium',
            color: Color.LIGHT_GRAY,
            marginTop: 8,
            textAlign: 'center'
          }}>
            {user.fullName}
          </Text>

          {/* Email Address */}
          <Text style={{
            fontSize: 18,
            fontFamily: 'fredoka',
            color: Color.LIGHT_GRAY,
            marginTop: 8
          }}>
            {user?.primaryEmailAddress.emailAddress}
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