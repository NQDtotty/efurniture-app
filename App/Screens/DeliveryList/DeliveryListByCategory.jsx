import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DeliveryListItem from './DeliveryListItem';

export default function DeliveryListByCategory() {
  const navigation = useNavigation();
  const params = useRoute().params;

  const [type, setType] = useState(params.type);
  const [listDelivery, setListDelivery] = useState([]);

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color='black' />
        <Text style={{ fontSize: 25, fontFamily: 'fredoka-medium' }}>{params.description}</Text>
      </TouchableOpacity>

      <FlatList
        data={listDelivery}
        renderItem={({ item, index }) => (
          <DeliveryListItem data={item} type={type} key={index} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  }
});