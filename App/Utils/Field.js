import { TextInput } from 'react-native';
import React from 'react';
import Color from './Color';

const Field = props => {
  return (
    <TextInput {...props} style={{
      borderRadius: 100,
      paddingHorizontal: 10,
      width: '80%',
      height: 50,
      backgroundColor: Color.FOURTH,
      marginTop: 30
    }} />
  )
}

export default Field;