import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function CommonHeader({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{text}</Text>
      {
        isViewAll && <Text>View All</Text>
      }
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
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: 'fredoka-medium'
  }
});