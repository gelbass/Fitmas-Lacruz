import { StyleSheet, Text, View } from 'react-native'

import Buttons from '../components/Buttons';
import React from 'react'

const NutricionistasScreen = ({navigation}) => {
  return (
    <View>
      <Buttons
            funtion={() => navigation.navigate("Home")}
            newStyles={{ fontFamily: "RobotoMedium" }}
            title={"Ir al Inicio"}
          />
    </View>
  )
}

export default NutricionistasScreen;

const styles = StyleSheet.create({})