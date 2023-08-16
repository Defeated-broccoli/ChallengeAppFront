import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import ImageButton from './ImageButton'
import CommentList from './CommentList'

import assets from '../constants/assets'
import { fetchAppUserById } from '../api/appUser'
import { fetchLikesNumberByPostId } from '../api/likes'

const PostDashboard = ({
  appUserId,
  challengeId,
  postId,
  title,
  description,
}) => {
  const [appUser, setAppUser] = useState(false)
  const [commentToggle, setCommentToggle] = useState(false)
  const [likesNumber, setLikesNumber] = useState(0)

  const [readMore, setReadMore] = useState(false)

  const navigation = useNavigation()

  const getAppUserData = async () => {
    try {
      const data = await fetchAppUserById(appUserId)
      setAppUser(data)
    } catch (error) {
      console.error('Error while fetching App User', error)
    }
  }

  const getLikesData = async () => {
    try {
      const likesData = await fetchLikesNumberByPostId(postId)
      setLikesNumber(likesData)
    } catch (error) {
      console.error('Error occurred while fetching likes number', error)
    }
  }

  useEffect(() => {
    getAppUserData()
    getLikesData()
  }, [])

  if (commentToggle) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 500, width: '100%' }}>
          <CommentList postId={postId} />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            zIndex: 6,
            padding: 10,
          }}
          onPress={() => {
            setCommentToggle(false)
          }}
        >
          <Text style={{ fontSize: 24 }}>x</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontSize: 12 }}
          onPress={() => {
            setReadMore(!readMore)
          }}
        >
          {readMore ? description : description.slice(0, 100) + '...'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View style={{ margin: 5 }}>
          <View>
            <ImageButton
              image={{ uri: appUser.image }}
              handlePress={() => {
                navigation.navigate('User', { userId: appUser.id })
              }}
              borderRadius={15}
            />
          </View>
        </View>
        <View>
          <ImageButton image={assets.likeIcon} text={likesNumber} />
        </View>
        <View>
          <ImageButton
            image={assets.commentsIcon}
            handlePress={() => {
              setCommentToggle(true)
            }}
          />
        </View>
        <View>
          <ImageButton
            image={assets.challengeIcon}
            handlePress={() => {
              navigation.navigate('Challenges', { challengeId: challengeId })
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default PostDashboard
