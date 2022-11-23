import { Modal, Pressable, Text, View } from "react-native";

import StylesModal from "./StylesModal";

const ModalAux = props => {
  const { isVisible, actionDeleteItem, item, closeModal } = props;
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.texto}>
          ¿Quieres eliminar {item.value} de la lista
        </Text>
        <View>
          <View style={styles.contanerButton}>
            <Pressable onPress={() => actionDeleteItem()} style={styles.button}>
              <Text>Eliminar</Text>
            </Pressable>
            <Pressable onPress={() => closeModal(false)} style={styles.button}>
              <Text>Salir</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StylesModal;

export default ModalAux;
