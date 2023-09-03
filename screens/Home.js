import { View, Text } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useState, useEffect } from 'react'

import PostCard from '../components/PostCard'

import { fetchPosts } from '../api/posts'

const Home = () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const postData = await fetchPosts()
        setPosts(postData)
      } catch (error) {
        console.error('Error occurred while fetching posts', error)
      }
    }
    getPostsData()
  }, [])

  if (posts && posts.length > 0) {
    return (
      <PagerView style={{ flex: 1 }} orientation={'vertical'}>
        {posts.map((item, index) => (
          <View key={index}>
            <PostCard data={item} />
          </View>
        ))}
      </PagerView>
    )
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32 }}>Loading...</Text>
      </View>
    )
  }
}

export default Home
