import { View, Text } from 'react-native';
import React from 'react';
import Header from './Header';
import Category from './Category';
import News from './News';

export default function Home() {
  return (
    <View>
      <Header />

      <View style={{ padding: 20 }}>
        <News />
        <Category />
      </View>
    </View>
  )
}