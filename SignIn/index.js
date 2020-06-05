import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { } from './styles';
import firebase from 'firebase';

import { AuthContext } from '../context';

export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const SignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))
  }

  return (
    <View style={styles.container}>
      <View style={styles.view_fields}>
        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} />

        <TextInput
          style={styles.input_auth}
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true} />
      </View>
      <Button title="Acessar" onPress={() => SignIn()} />
      <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
      <Button title="Acessar Via Google" onPress={() => navigation.push("SigninGoogle")} />

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
  },
  input_auth: {
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderRadius: 3,
    margin: 10,
    marginTop: 0,
    padding: 4
  },
  view_fields: {
    flexDirection: 'column',
    width: '100%',
    height: 100
  }
});