import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import * as Google from 'expo-google-app-auth'
import { } from './styles';
const GOOGLE_APIKEY = '4467894514-vkvnpas9pqrbs3rgmgi4a08o4m3aljs3.apps.googleusercontent.com';

import { AuthContext } from '../context';
export default class SigninGoogle extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  handleSignin = async () => {
    
    try {      
      const result = await Google.logInAsync({
        androidClientId: GOOGLE_APIKEY,
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage />
        ) : (
            <LoginPage handleSignin={this.handleSignin} />
          )}
      </View>
    )
  }

}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.handleSignin()} />
    </View>
  )
}

const LoggedInPage = props => {
  const { signIn } = React.useContext(AuthContext)
  signIn();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
