import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';


export default Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button title="Detalhes Sem Parametro" onPress={() =>
        navigation.push('HomeDetails')} />
      <Button title="Detalhes Com Parametro" onPress={() =>
        navigation.push('HomeDetails', { name: 'Isso é um teste' })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

