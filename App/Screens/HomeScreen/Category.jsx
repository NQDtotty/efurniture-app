import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import CommonHeader from '../../Components/CommonHeader';
import { DELIVERY_ICON, DELIVERED_ICON, CANCELED_DELIVERY_ICON, PENCIL_RULER_ICON } from '../../../assets/icons';
import Color from '../../Utils/Color';
import { useNavigation } from '@react-navigation/native';

export default function Category() {
  const categories = [
    {
      name: 'Delivery',
      description: 'New Delivery List',
      srcImage: DELIVERY_ICON,
      type: 'delivery'
    },
    {
      name: 'Delivered',
      description: 'Delivered List',
      srcImage: DELIVERED_ICON,
      type: 'delivered'
    },
    {
      name: 'Canceled',
      description: 'Canceled Order List',
      srcImage: CANCELED_DELIVERY_ICON,
      type: 'delivered'
    },
    {
      name: 'Design',
      description: 'Design Order List',
      srcImage: PENCIL_RULER_ICON,
      type: 'design'
    }
  ];

  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <CommonHeader text={'Categories'} />

      <View style={styles.container}>
        {
          categories?.map((item, index) => (
            <TouchableOpacity style={styles.subContainer} key={index}
              onPress={() => navigation.push('order-list', { type: item.type, description: item.description })}>
              <Image source={item.srcImage} style={{ width: 35, height: 35 }} />
              <Text style={{fontFamily: 'fredoka-medium'}}>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Color.LIGHT_GRAY,
    padding: 10,
    borderRadius: 99,
    width: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  }
});