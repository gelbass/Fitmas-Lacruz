import { Image, Pressable, Text, View } from 'react-native'

import React from 'react'
import Styles from './styles'

const ScreenIndex = ({onLoggin,newStyles}) => {
  return (
    <View>
      <View style={{ height: "5%", backgroundColor: "#561D74" }} />
      <Image source={require("../../assets/img/index.jpg")} />
      <View style={styles.containerButton}>
        <Pressable onPress={() => onLoggin(false)} style={styles.button}>
          <Text style={{ ...styles.buttonText, ...newStyles}}>
            REGÍSTRATE
          </Text>
        </Pressable>
        <Pressable onPress={() => onLoggin(true)} style={styles.button}>
          <Text style={{ ...styles.buttonText, ...newStyles}}>
            INICIA SESIÓN
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ScreenIndex;

const styles = Styles;
