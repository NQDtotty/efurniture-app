import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Color from '../../Utils/Color';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { getAccountById } from '../../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDate } from '../../helpers/getFormat';

export default function DeliveryListItem({ data, type }) {
  const { address, phone, user_id: userId, createdAt, updatedAt } = data;
  const navigation = useNavigation();
  const [customer, setCustomer] = useState();
  const [emailCustomer, setEmailCustomer] = useState();

  async function getUser(userId) {
    const token = await AsyncStorage.getItem('token');
    const data = await getAccountById(userId, token);
    setEmailCustomer(data.data.email);
    setCustomer(data.data.profile.name);
  }

  useEffect(() => {
    getUser(userId);
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.push('order-details', { orderDetails: data, type, emailCustomer, customer })
    }}>
      {/* <Image source={{ uri: products.images }} style={styles.image} /> */}
      <View style={styles.subContainer}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical:8 }}>
          <Text style={{ fontFamily: 'fredoka-bold', fontSize: 18 }}>Customer Name: {customer}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 2 }}>
          <Text style={{ fontFamily: 'fredoka-medium' }}>
            Email: {emailCustomer}
          </Text>
          <Text style={{ fontFamily: 'fredoka-medium' }}>
            Phone: {phone}
          </Text>
        </View>
        <Text style={{ fontFamily: 'fredoka-medium', marginVertical: 2}}>
          <Entypo name="location-pin" size={17} color={Color.PRIMARY} />
          {address}
          </Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 2 }}>
          {
            getStatus(type)
          }
          {
            (type === 'delivery' || type === 'design') ? (
              <View>
                <Text style={{ fontFamily: 'fredoka-medium' }}>{formatDate(createdAt)}</Text>
              </View>
            ) : (
              <View>
                <Text style={{ fontFamily: 'fredoka-medium' }}>{formatDate(updatedAt)}</Text>
              </View>
            )
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
    width: '100%'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  }
});