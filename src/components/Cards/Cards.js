import React from 'react'
import StylesCards from './StylesCards'
import { View } from 'react-native'

const Cards = ({ children, newStyles }) => {
  return (
    <View style={{...styles.container, ...newStyles}}>
      {children}
    </View>
  )
}

export default Cards

const styles = StylesCards;