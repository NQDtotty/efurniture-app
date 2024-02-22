import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Color from '../../Utils/Color';

export default function DeliveryListItem({ data, type }) {
  const { phone, fullName, address } = data;

  return (
    <View style={styles.container}>
      <Text>DeliveryListItem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.WHITE,
    borderRadius: 15,
    marginBottom: 15
  }
});