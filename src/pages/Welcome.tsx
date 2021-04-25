import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

import wateringImg from '../assets/watering.png'

export const Welcome = () => {
  const navigation = useNavigation()

  function handleStart() {
    navigation.navigate('UserIdentification')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Text>

      <Image
        style={styles.image}
        source={wateringImg}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Feather
          style={styles.icon}
          name="chevron-right"
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 32
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  icon: {
    fontSize: 32,
    color: colors.white
  },
})
