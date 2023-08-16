import { View, Text, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'

import PostDashboard from './PostDashboard'

const PostCard = ({ data }) => {
  return (
    <View style={{}}>
      <Image
        source={{ uri: data.image }}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgba(255,255,255,0.5)',
          width: '100%',
          borderWidth: 1,
        }}
      >
        <PostDashboard
          appUserId={data.appUserId}
          challengeId={data.challengeId}
          postId={data.id}
          title={data.title}
          description={data.description}
        />
      </View>
    </View>
  )
}

export default PostCard
