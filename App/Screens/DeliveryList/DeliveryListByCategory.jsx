import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DeliveryListItem from './DeliveryListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getOrderNeedToShipping, getOrderDeliveredInMonth } from '../../api/order';
import Color from '../../Utils/Color';
import AnimatedLoader from 'react-native-animated-loader';

export default function DeliveryListByCategory() {
  const navigation = useNavigation();
  const params = useRoute().params;
  const [listOrder, setListOrder] = useState([]);
  const [type, setType] = useState(params.type);
  const [visible, setVisible] = useState(true);

  async function getData() {
    try {
      const token = await AsyncStorage.getItem('token');
      let data;
      if (type === 'delivery') {
        await AsyncStorage.setItem('isLoggedIn', 'false')
        data = await getOrderNeedToShipping(token);
      } else if (type === 'delivered') {
        data = await getOrderDeliveredInMonth(token);
      } else if (type === 'canceled') {

      } else if (type === 'design') {

      }

      // check status code
      if (data.statusCode === 200) {
        setListOrder(data.data);
      }
      setVisible(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {
        visible ? (
          <AnimatedLoader visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
          </AnimatedLoader>) : listOrder.length ? (
            <View style={{ padding: 20, paddingTop: 30 }}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back-outline' size={30} color='black' />
                <Text style={{ fontSize: 25, fontFamily: 'fredoka-medium' }}>{params.description}</Text>
              </TouchableOpacity>

              <FlatList
                data={listOrder}
                renderItem={({ item, index }) => (
                  <DeliveryListItem data={item} type={type} key={index} />
                )}
              />
            </View>
          ) : (
          <View style={{ padding: 20, paddingTop: 30, backgroundColor: Color.WHITE, height: '100%' }}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name='arrow-back-outline' size={30} color='black' />
              <Text style={{ fontSize: 25, fontFamily: 'fredoka-medium' }}>{params.description}</Text>
            </TouchableOpacity>

            <View style={{ width: '100%' }}>
              <Image source={require('./../../../assets/images/empty.jpg')} style={{ width: '100%' }} />
            </View>
          </View>
        )
      }

    </>
  )
}

const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  lottie: {
    width: 100,
    height: 100,
  },
});