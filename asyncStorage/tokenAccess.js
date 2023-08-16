import AsyncStorage from '@react-native-async-storage/async-storage'

export const StoreData = async (key, value) => {
  try {
    var result = await AsyncStorage.setItem(key, value)
    return result
  } catch (error) {
    console.error(error)
  }
}

export const RetrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value
  } catch (error) {
    console.error(error)
  }
}
