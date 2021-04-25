import React from 'react'
import Constants from 'expo-constants'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import userImg from '../assets/profile.png'

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
          Olá,
        </Text>
        <Text style={styles.userName}>
          John Doe
        </Text>
      </View>

      <Image style={styles.userImage} source={userImg} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 40
  }
})
