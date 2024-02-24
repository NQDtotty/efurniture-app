import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../Utils/Color';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import CommonHeader from '../../Components/CommonHeader';

export default function DeliveryDetails() {
  const navigation = useNavigation();
  const params = useRoute().params;
  const [orderDetails] = useState(params.orderDetails);

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-outline' size={30} color='black' />
        </TouchableOpacity>
      <ScrollView style={{ height: '93%' }}>
        <View>
          <Image source={{ uri: orderDetails.products?.images }} style={{ width: '100%', height: 300 }} />
        </View>

        <View style={{ paddingTop: 20 }}>
          <Text style={{ fontFamily: 'fredoka-bold', fontSize: 25 }}>Product Name: Table</Text>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Total: 3</Text>
        </View>

        <View style={{ borderWidth: 0.4, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>

        <View>
          <CommonHeader text={'Description'} />
          <Text style={{ fontFamily: 'fredoka', lineHeight: 24, fontSize: 16, color: Color.GRAY }} numberOfLines={5}>
            React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling deve…
          </Text>
        </View>

        <View style={{ borderWidth: 0.4, borderColor: Color.GRAY, marginTop: 20, marginBottom: 20 }}></View>

        <View style={styles.inforContainer}>
          <CommonHeader text={'Contact Customer'} />
          <View style={styles.subContainer}>
            <Text style={{ fontFamily: 'fredoka-medium', fontSize: 20, color: Color.THIRD }}>Nguyen Anh Thoai</Text>
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
              <Text>0909090909</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Address: 55 Dien Bien Phu</Text>
          <Text style={{ fontFamily: 'fredoka-medium', fontSize: 15 }}>Email: totty@gmail.com</Text>
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
        <TouchableOpacity style={styles.shipButton}>
          <Text style={{ textAlign: 'center', fontFamily: 'fredoka-medium', fontSize: 18, color: Color.WHITE }}>
            <FontAwesome5 name="shipping-fast" size={18} color={Color.WHITE} />
            Ship
          </Text>
        </TouchableOpacity>
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