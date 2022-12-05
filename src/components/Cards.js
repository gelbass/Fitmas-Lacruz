import { StyleSheet, TouchableOpacity, View } from "react-native";

import { COLORS } from "../constants/colors";

const Cards = ({ children, newStyles, item, onSelected }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...newStyles }}
      onPress={() => onSelected(item)}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 113,
    backgroundColor: COLORS.blanco,
    borderRadius: 10,
    shadowColor: COLORS.negro,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 1 },
    shadowRadius: 3,
    elevation: 3
  }
});
