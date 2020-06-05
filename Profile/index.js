import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';
import firebase from 'firebase';

import { AuthContext } from '../context';

export default Profile = () => {

  const { signOut } = React.useContext(AuthContext)

  const SignOut = () => {
    firebase
    .auth()
    .signOut()
    .then(() => signOut())
    .catch(function (error) {
      alert(error)
    });
  }

  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
      <Button title="Sair" onPress={() => SignOut()} />
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

