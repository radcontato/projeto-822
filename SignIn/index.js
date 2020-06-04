import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import * as Google from 'expo-google-app-auth'

//import { AuthContext } from '../context';

//import { } from './styles';

//import firebase from 'firebase';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "4467894514-vkvnpas9pqrbs3rgmgi4a08o4m3aljs3.apps.googleusercontent.com",
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
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    )
  }

}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
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

// export default SignIn = ({ navigation }) => {

//   const { signIn } = React.useContext(AuthContext)

//   const [textEmail, setTextEmail] = React.useState('')
//   const [textPassword, setTextPassword] = React.useState('')

//   const handleSignIn = () => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(textEmail, textPassword)
//       .then(() => signIn())
//       .catch(error => alert(error))

//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.view_fields}>
//         <TextInput
//           style={styles.input_auth}
//           onChangeText={text => setTextEmail(text.toLowerCase())}
//           value={textEmail} />

//         <TextInput
//           style={styles.input_auth}
//           onChangeText={text => setTextPassword(text)}
//           value={textPassword} secureTextEntry={true} />
//       </View>
//       <Button title="Acessar" onPress={() => handleSignIn()} />
//       <Button title="Criar Conta" onPress={() => navigation.push("CreateAccount")} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginVertical: 10,
//     borderRadius: 5
//   },
//   input_auth: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     flex: 1,
//     borderRadius: 3,
//     margin: 10,
//     marginTop: 0,
//     padding: 4
//   },
//   view_fields: {
//     flexDirection: 'column',
//     width: '100%',
//     height: 100
//   }
// });

