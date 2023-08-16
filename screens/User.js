import { View, Text, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import UserCommentList from '../components/UserCommentList'
import UserPostList from '../components/UserPostList'

import assets from '../constants/assets'

import {
  fetchAppUserById,
  fetchPostsByAppUserId,
  fetchCommentsByAppUserById,
} from '../api/appUser'

const User = ({ route, navigation }) => {
  const { userId } = route.params
  const [appUser, setAppUser] = useState()
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()
  const [postComToggle, setPostComToggle] = useState(true)

  useEffect(() => {
    getAppUserData()
    getAppUserPostsData()
  }, [])

  const getAppUserData = async () => {
    try {
      const data = await fetchAppUserById(userId)
      setAppUser(data)
    } catch (error) {
      console.error('Error occurred while fetching App User', error)
    }
  }

  const getAppUserPostsData = async () => {
    try {
      const data = await fetchPostsByAppUserId(userId)
      setPosts(data)
    } catch (error) {
      console.error(`Error occurred while fetching App User's Posts`, error)
    }
  }

  const getAppUserCommentsData = async () => {
    try {
      const data = await fetchCommentsByAppUserById(userId)
      setComments(data)
    } catch (error) {
      console.error(`Error occurred while fetching App User's Comments`, error)
    }
  }

  if (!appUser) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Text style={{ fontSize: 32 }}>Loading...</Text>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: 20,
          margin: 10,
          height: '50%',
        }}
      >
        <Image
          source={{ uri: appUser.image }}
          style={{
            height: '30%',
            width: '70%',
            borderRadius: 20,
            borderWidth: 2,
          }}
          resizeMode="cover"
        />

        <Text
          style={{
            margin: 5,
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 0,
          }}
        >
          {appUser.name}
        </Text>
        <Text
          style={{
            margin: 5,
          }}
        >
          {appUser.description}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          borderRadius: 20,
          margin: 10,
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Button
            title="Posts"
            onPress={() => {
              getAppUserPostsData()
              setPostComToggle(true)
            }}
          />
          <Button
            title="Comments"
            onPress={() => {
              getAppUserCommentsData()
              setPostComToggle(false)
            }}
          />
        </View>

        {postComToggle && (
          <FlatList
            style={{ height: '37%' }}
            data={posts}
            renderItem={({ item }) => (
              <UserPostList
                image={item.image}
                description={item.description}
                title={item.title}
              />
            )}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        )}
        {!postComToggle && (
          <FlatList
            style={{ height: '37%' }}
            data={comments}
            renderItem={({ item }) => <UserCommentList text={item.text} />}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        )}
      </View>

      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Image source={assets.post02} resizeMode="cover" />
      </View>
    </View>
  )
}

export default User
