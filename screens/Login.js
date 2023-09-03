import { View, Image } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import assets from '../constants/assets'

import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

import { fetchTokenByAppUserData } from '../api/login'
import { StoreData } from '../asyncStorage/tokenAccess'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const navigation = useNavigation()

  const checkLogin = async () => {
    try {
      const data = await fetchTokenByAppUserData(login, password)
      if (data !== null) {
        setToken(data)
        await StoreData('token', data)

        navigation.navigate('Home')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          height: '100%',
        }}
      >
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: 200,
              height: 200,
            }}
            source={assets.challengeIcon}
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <CustomInput
            placeholder={'email'}
            handleChange={(value) => setLogin(value)}
          />
          <CustomInput
            placeholder={'password'}
            handleChange={(value) => setPassword(value)}
            secureText={true}
          />
          <CustomButton
            text={'Log in'}
            handlePress={checkLogin}
            borderRadius={10}
            backgroundColor={'rgb(255,255,255)'}
            width={'90%'}
            margin={5}
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <CustomButton
            text={'Log with Google'}
            backgroundColor={'rgb(255,255,255)'}
            width={'90%'}
            margin={5}
            borderWidth={2}
          />
          <CustomButton
            text={'Log with fb'}
            backgroundColor={'rgb(255,255,255)'}
            width={'90%'}
            margin={5}
            borderWidth={2}
          />
        </View>
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

export default Login

//just another test merge
