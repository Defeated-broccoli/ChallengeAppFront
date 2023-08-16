import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({ placeholder, handleChange, secureText = false }) => {
  return (
    <TextInput
      style={{
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 10,
        borderWidth: 1.5,
        margin: 5,
        padding: 5,
        paddingLeft: 10,
      }}
      placeholder={placeholder}
      onChangeText={handleChange}
      secureTextEntry={secureText}
    />
  )
}

export default CustomInput
