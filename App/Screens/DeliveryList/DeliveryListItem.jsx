import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Color from '../../Utils/Color';
import { getUserByEmail } from '../../api/user';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function DeliveryListItem({ data, type }) {
  const navigation = useNavigation();
  const { total = 2, phone = '909090909', address = '55 DC', statusDelivery = 'delivery', email = 'dev@gmail.com', products = {
    name: 'HUHU',
    images: 'images'
  } } = data;
  const [userName, setUserName] = useState('sadsas');

  // useEffect(() => {
  //   async function getUser(email) {
  //     return await getUserByEmail(email);
  //   }

  //   const user = getUser(email);
  //   setUserName(user.name);
  // }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.push('delivery-details', { orderDetails: data })
    }}>
      <Image source={{ uri: products.images }} style={styles.image} />
      <View style={styles.subContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'fredoka-bold', fontSize: 18 }}>Product: {products.name}</Text>
          <Text style={{ fontFamily: 'fredoka-bold' }}>Total: {total}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'fredoka-medium' }}>Name: {userName}</Text>
          <Text style={{ fontFamily: 'fredoka-medium' }}>
            <Entypo name="phone" size={17} color={Color.PRIMARY} />
            {phone}
          </Text>
        </View>
        <Text style={{ fontFamily: 'fredoka-medium'}}>
          <Entypo name="location-pin" size={17} color={Color.PRIMARY} />
          {address}
          </Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          {
            getStatus(type)
          }
        </View>
      </View>
    </TouchableOpacity>
  )
}

function getStatus(status) {
  if (status === 'canceled') {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
        <Text style={{ fontFamily: 'fredoka-medium', color: 'red' }}>Status: Canceled</Text>
        <MaterialIcons name="cancel" size={14} color="red" />
      </View>
    )
  }
  if (status === 'delivered') {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
        <Text style={{ fontFamily: 'fredoka-medium', color: 'blue', alignItems: 'center' }}>Status: Delivered</Text>
        <FontAwesome name="history" size={14} color="blue" />
      </View>
    )
  }
  if (status === 'delivery') {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
        <Text style={{ fontFamily: 'fredoka-medium', color: 'green' }}>Status: Open Delivery</Text>
        <MaterialIcons name="local-shipping" size={14} color="green" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  }
});