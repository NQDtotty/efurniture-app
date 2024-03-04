import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CommonHeader from '../../Components/CommonHeader';

export default function Product() {

  return (
    <View style={{ marginTop: 15 }}>
      <CommonHeader text={'New Product'} />

      <FlatList />
    </View>
  )
}