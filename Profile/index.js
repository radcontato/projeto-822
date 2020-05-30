import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';



export default Profile = () => {

  const { signOut } = React.useContext(AuthContext)

  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      signOut();
    }).catch(function (error) {
      alert(error)
    });
  }

  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
      <Button title="Sair" onPress={() => handleSignOut()} />
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

