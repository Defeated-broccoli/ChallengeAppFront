import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CustomButton = ({
  handlePress,
  image,
  text,
  borderRadius,
  width,
  height,
  backgroundColor,
  margin,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width || 30,
        height: height || 30,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        margin: margin,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: borderWidth,
        borderColor: borderColor || 'rgb(220,220,220)',
      }}
      onPress={handlePress}
    >
      <Image
        source={image}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: borderRadius || 0,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
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
    </TouchableOpacity>
  )
}

export default CustomButton
