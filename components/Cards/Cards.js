import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import StylesCards from './StylesCards'

const Cards = ({ children, newStyles }) => {
  return (
    <View style={{...styles.container, ...newStyles}}>
      {children}
    </View>
  )
}

export default Cards

const styles = StylesCards;