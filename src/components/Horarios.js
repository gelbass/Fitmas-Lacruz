import { StyleSheet, Text, View } from 'react-native'

import Buttons from './Buttons';
import React from 'react'

const Horarios = ({horarios,onSelectedHour}) => {
  console.log(horarios);
  return (
    <View>
      {/* {horarios.map(cupo => <Buttons title={cupo.horarios} funtion ={onSelectedHour(cupo.horarios)}/>)} */}
    </View>
  )
}

export default Horarios

const styles = StyleSheet.create({})