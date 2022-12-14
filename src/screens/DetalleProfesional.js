import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux'

const DetalleProfesional = () => {

  const profesional = useSelector((state) => state.profesional.selected);
  
  
  return (
    <View>
      <Text>{profesional.nombre}</Text>
    </View>
  )
}

export default DetalleProfesional

const styles = StyleSheet.create({})