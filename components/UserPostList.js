import { View, Text, Image } from 'react-native'

const UserPostList = ({ title, description, image }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        margin: 5,
        width: '100%',
      }}
    >
      <View>
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100 }}
          resizeMode="cover"
        />
      </View>
      <View style={{ width: '70%' }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', margin: 5 }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
        </View>

        <View style={{ margin: 5, marginTop: 0 }}>
          <Text>{description.slice(0, 100)}</Text>
        </View>
      </View>
    </View>
  )
}

export default UserPostList
