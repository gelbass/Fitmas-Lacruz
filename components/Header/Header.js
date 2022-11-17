import { Image, Text, View } from "react-native";

import StylesHeader from "./StylesHeader";

const Header = ({newStyles, text}) =>{
  return(
    <View style={{...style.header}}>
      <Text style={{...style.titulo, ...newStyles}}>{text}</Text>
    </View>
  );
};
const style = StylesHeader;
export default Header;