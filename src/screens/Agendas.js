import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import React from 'react'

const Agendas = () => {
  const dispatch = useDispatch();
  const agendas = useSelector(state => state.agenda.agendas);
  // const items = useSelector((state) => state.agenda.items);
  // const total = useSelector((state) => state.cart.total);

  // const handleDeleteItem = (id) => {
  //   dispatch(removeItem(id));
  // };

  const renderItem = ({ agendas }) => (
    <Cart >
      <Text>agendas</Text>
    </Cart>
  );
  return (
    <View>
      <Header text={"Mis Agendas"} />
    </View>
  )
}

export default Agendas

const styles = StyleSheet.create({})