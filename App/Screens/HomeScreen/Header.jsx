import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Color from '../../Utils/Color';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { user, isLoading } = useUser();

  return user && (
    <View style={styles.container}>
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={{ color: Color.WHITE, fontFamily: 'fredoka-medium' }}>Welcome</Text>
            <Text style={{ color: Color.WHITE, fontSize: 20, fontFamily: 'fredoka-medium' }}>{user?.fullName}</Text>
          </View>
        </View>

        <Ionicons name="notifications-sharp" size={27} color={Color.WHITE} />
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search' style={styles.textInput} />
        <View style={styles.searchBtn}>
          <FontAwesome name='search' size={24} color={Color.PRIMARY} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    marginTop: 10,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99
  },
  profileMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    width: '85%',
    fontSize: 16
  },
  searchBarContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  searchBtn: {
    backgroundColor: Color.WHITE,
    borderRadius: 8,
    padding: 10
  }
});