import { View, Text, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

import { fetchCommentsByPostId } from '../api/posts'

import CommentListElement from './CommentListElement'

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    const getCommentsData = async () => {
      try {
        const data = await fetchCommentsByPostId(postId)
        setComments(data)
      } catch (error) {
        console.error('Error while fetching comments', error)
      }
    }

    getCommentsData()
  }, [])

  if (!comments) {
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

  if (comments.length < 1) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Text style={{ fontSize: 32, textAlign: 'center' }}>
          This post doesn't have any comments.
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          You can write about weather or your favorite type of cookie!
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      style={{
        width: '100%',
        height: '100%',
        zIndex: 6,
      }}
      data={comments}
      renderItem={({ item }) => <CommentListElement comment={item} />}
    />
  )
}

export default CommentList
