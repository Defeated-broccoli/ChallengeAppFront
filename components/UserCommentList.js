import { View, Text } from 'react-native'

const UserCommentList = ({ text }) => {
  return (
    <View style={{ margin: 3, padding: 3, borderBottomWidth: 1 }}>
      <Text>{text.slice(0, 100)}</Text>
    </View>
  )
}

export default UserCommentList
