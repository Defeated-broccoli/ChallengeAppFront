import { View, Text } from 'react-native'
import React from 'react'

const ChallengeCard = ({ challenge }) => {
  //TODO - create an api to call for 3 or for most popular post of every challenge

  return (
    <View
      style={{
        flex: 1,
        height: 400,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgba(225,225,225,0.5)',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: '40%',
        }}
      >
        <Text style={{ margin: 5 }}>
          {challenge.text.slice(0, 220) + '...'}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '80%',
          height: '40%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <View style={{ width: '50%', height: '50%', borderWidth: 1 }}>
          <Text>post</Text>
        </View>
        <View style={{ width: '50%', height: '50%', borderWidth: 1 }}>
          <Text>post</Text>
        </View>
        <View style={{ width: '50%', height: '50%', borderWidth: 1 }}>
          <Text>post</Text>
        </View>
        <View style={{ width: '50%', height: '50%', borderWidth: 1 }}>
          <Text>post</Text>
        </View>
      </View>
    </View>
  )
}

export default ChallengeCard
