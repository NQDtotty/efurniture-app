import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CommonHeader from '../../Components/CommonHeader';

export default function News() {

  return (
    <View style={{ marginTop: 15 }}>
      <CommonHeader text={'News'} />

      <FlatList />
    </View>
  )
}