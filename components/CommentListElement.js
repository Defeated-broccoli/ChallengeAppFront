import { View, Text, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { fetchAppUserById } from '../api/appUser'

const CommentListElement = ({ comment }) => {
  const [appUser, setAppUser] = useState()

  const getAppUserData = async () => {
    try {
      const data = await fetchAppUserById(comment.appUserId)
      setAppUser(data)
    } catch (error) {
      console.error(`Error while fetching comment's App User`, error)
    }
  }

  useEffect(() => {
    getAppUserData()
  }, [])

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'rgba(255,255,255, 0.6)',
        borderRadius: 20,
      }}
    >
      <View>
        {appUser && (
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 }}
            source={{ uri: appUser.image }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={{ width: '75%' }}>
        <Text style={{ fontSize: 12 }}>{comment.text}</Text>
      </View>
    </View>
  )
}

export default CommentListElement
