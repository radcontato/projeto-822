import React from 'react';
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer"

import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import Home from './Home';
import HomeDetails from './Home/details';
import Profile from './Profile';
import Chat from './Chat';
import Upload from './Upload';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

import { AuthContext } from './context';

import firebase from './config/firebase';


const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
  </HomeStack.Navigator>

)


const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'facebook-f' : 'facebook-f';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'android' : 'android';
        } else if (route.name === 'Chat') {
          iconName = focused ? 'apple' : 'apple';
        } else if (route.name === 'Upload') {
          iconName = focused ? 'adobe' : 'adobe';
        }
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
    })} tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray', }}>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Profile" component={ProfileStackScreen} />
    <Tabs.Screen name="Chat" component={Chat} />
    <Tabs.Screen name="Upload" component={Upload} />
  </Tabs.Navigator>
)



export default () => {




  const [userToken, setUserToken] = React.useState(null);

  React.useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserToken(user)
      } else {
        setUserToken(null)
      }

    })
    // 
  }, []);



  const authContext = React.useMemo(() => {
    return {
      signIn: () => { setUserToken('umMontedeCaracteres') },
      signUp: () => { setUserToken('umMontedeCaracteres') },
      signOut: () => { setUserToken(null) },
    }
  })

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ?
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabsScreen} />
            <Drawer.Screen name="Profile" component={ProfileStackScreen} />
          </Drawer.Navigator>

          :
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={SignIn}
              options={{ title: "Acessar" }}
            />
            <AuthStack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ title: "Criar Conta" }}
            />
          </AuthStack.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>

  )
}