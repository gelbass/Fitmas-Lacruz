import { StyleSheet, Text, View } from 'react-native'

import Buttons from '../components/Buttons'
import Header from '../components/Header'

const PerfilScreen = ({onLoggout}) => {
  return (
    <>
    <Header text={"Perfil"} />
    <Buttons
        funtion={() => onLoggout(true)}
        newStyles={{ fontFamily: "RobotoMedium" }}
        title={"CERRAR SESIÓN"}
      />
    </>
    
  )
}

export default PerfilScreen;

const styles = StyleSheet.create({})