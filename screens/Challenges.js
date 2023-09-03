import { View, FlatList, SafeAreaView, Image, Text } from 'react-native'
import { useEffect, useState } from 'react'

import ChallengeCard from '../components/ChallengeCard'
import SearchHeader from '../components/SearchHeader'

import { fetchChallenges } from '../api/challenges'
import assets from '../constants/assets'

const Challenges = ({ route, navigation }) => {
  const { challengeId } = route.params

  const [challenges, setChallenges] = useState()
  const [searchResult, setSearchResult] = useState()

  const getChallengeData = async () => {
    try {
      const data = await fetchChallenges()
      setChallenges(data)
    } catch (error) {
      console.error('Error occurred while fetching challenges', error)
    }
  }

  useEffect(() => {
    getChallengeData()
  }, [])

  //TODO - search should search the database via API, not list of already called challenges
  const handleSearch = (value) => {
    if (!value.length) {
      getChallengeData()
    }

    const filteredData = challenges.filter((item) =>
      item.text.toLowerCase().includes(value.toLowerCase())
    )

    if (filteredData.length) {
      setChallenges(filteredData)
    } else {
      getChallengeData()
    }
  }

  if (!challenges) {
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: '100%', height: '100%' }}
          data={challenges}
          renderItem={({ item }) => <ChallengeCard challenge={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<SearchHeader onSearch={handleSearch} />}
        />
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
    </SafeAreaView>
  )
}

export default Challenges

//change 2
