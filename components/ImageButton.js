import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const ImageButton = ({ handlePress, image, text, borderRadius, ...props }) => {
  console.log(props)
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
      }}
      onPress={handlePress}
    >
      <Image
        source={image}
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: borderRadius || 0,
        }}
        resizeMode="cover"
      />
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 4,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ImageButton
