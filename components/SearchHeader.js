import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        marginTop: 30,
        backgroundColor: 'rgb(220,220,220)',
        borderRadius: 10,
        margin: 5,
        height: 40,
      }}
    >
      <TextInput
        placeholder="Search Challenges"
        style={{ flex: 1, width: '70%', padding: 10 }}
        onChangeText={onSearch}
      ></TextInput>
    </View>
  )
}

export default SearchHeader
