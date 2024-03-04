import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utils/Color';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import CommonHeader from '../../Components/CommonHeader';
import { formatDate } from '../../helpers/getFormat';
import { updateStatusOrderDelivered, updateStatusOrderShipping } from '../../api/order';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView from 'react-native-maps';

export default function DeliveryDetails() {
  const navigation = useNavigation();
  const params = useRoute().params;
  const [orderDetails] = useState(params.orderDetails);
  const [type] = useState(params.type);
  const { address, email, id: orderId, phone, products, user_id: userId, createdAt, updatedAt, status_delivery: status, customer } = orderDetails;

  const onShipping = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      await updateStatusOrderDelivered(orderId, token);

      navigation.navigate('home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color='black' />
      </TouchableOpacity>
      <ScrollView style={{ height: '93%' }}>
        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontFamily: 'fredoka-bold', fontSize: 25 }}>List Products: {products.length}</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          {
            products?.map((item, index) => (
              <View key={index} style={{
                borderWidth: 2,
                borderColor: Color.THIRD,
                borderRadius: 15,
              }}>
                <View style={styles.subProduct}>
                  <Text style={{ fontFamily: 'fredoka-medium', fontSize: 17, color: Color.THIRD }}>Product Name: {item.name}</Text>
                  <Text style={{ fontFamily: 'fredoka-medium', fontSize: 17, color: Color.THIRD }}>Quantity: {item.quantity}</Text>
                </View>
                <View style={styles.subProduct}>
                  <Text style={{ fontFamily: 'fredoka-medium', fontSize: 17, color: Color.THIRD }}>Material: {item.material}</Text>
                  <Text style={{ fontFamily: 'fredoka-medium', fontSize: 17, color: Color.THIRD }}>Price: {item.price}</Text>
                </View>
              </View>
            ))
          }
        </View>

        <View style={{ borderWidth: 0.4, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>

        <View style={styles.inforContainer}>
          <CommonHeader text={'Contact Customer'} />
          <View style={styles.subContainer}>
            <Text style={{ fontFamily: 'fredoka-medium', fontSize: 20, color: Color.THIRD }}>{params.customer}</Text>
            <View style={{
              color: Color.PRIMARY,
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: Color.THIRD,
              padding: 5,
              borderRadius: 10,
              fontSize: 14
            }}>
              <Entypo name="phone" size={17} color={Color.PRIMARY} />
              <Text>{phone}</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Email: {params.emailCustomer}</Text>
        </View>

        <View style={{ borderWidth: 0.4, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>

        <View style={styles.inforContainer}>
          <CommonHeader text={'Order Details'} />
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Type Order: {type === 'design' ? 'Option Design' : 'Delivery'}</Text>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Address: {address}</Text>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>{'Created Date: ' + formatDate(createdAt)}</Text>
          {
            (type === 'delivered' || type === 'canceled') && (
              <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>{'Updated Date: ' + formatDate(updatedAt)}</Text>
            )
          }
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15, color: Color.THIRD }}>Status: {status}</Text>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>


      </ScrollView>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 8, margin: 8 }}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={{
            textAlign: 'center',
            fontFamily: 'fredoka-medium',
            fontSize: 18,
            color: Color.PRIMARY
          }}>
            <FontAwesome name="send" size={18} color={Color.PRIMARY} />
            Message
          </Text>
        </TouchableOpacity>
        {
          (type === 'delivery') && (
            <TouchableOpacity style={styles.shipButton} onPress={() => onShipping()}>
              <Text style={{ textAlign: 'center', fontFamily: 'fredoka-medium', fontSize: 18, color: Color.WHITE }}>
                <FontAwesome5 name="shipping-fast" size={18} color={Color.WHITE} />
                Ship
              </Text>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 10,
    padding: 20
  },
  inforContainer: {
    display: 'flex',
    gap: 7,
    marginBottom: 20
  },
  subContainer: {
    // position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  subProduct: {
    padding: 2,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  messageButton: {
    padding: 15,
    backgroundColor: Color.WHITE,
    borderWidth: 2,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    flex: 1
  },
  shipButton: {
    padding: 15,
    backgroundColor: Color.PRIMARY,
    borderWidth: 2,
    borderColor: Color.PRIMARY,
    borderRadius: 99,
    flex: 1
  }
});