import { StyleSheet, Text, View } from 'react-native'

import Buttons from './Buttons';
import { COLORS } from '../constants/colors';
import React from 'react'

const Horarios = ({horarios,onSelectedHour}) => {

  return (
    <View>
      {horarios.map(item => <Buttons newStyles={styles.horario} colorBase={COLORS.buttonColor} key={item.hora} title={item.hora} funtion={()=>onSelectedHour(item.hora)}/>)}
    </View>
  )
}

export default Horarios

const styles = StyleSheet.create({
  horario:{
    width:300,
    elevation: 1,
    borderColor:COLORS.primario,
    borderWidth:1
  }
})