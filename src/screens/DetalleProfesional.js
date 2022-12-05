import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DetalleProfesional = ({navigation , route}) => {
  return (
    <View>
      <Text>{route.params.nombre}</Text>
    </View>
  )
}

export default DetalleProfesional

const styles = StyleSheet.create({})