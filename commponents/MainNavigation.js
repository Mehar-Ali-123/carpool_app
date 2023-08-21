import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from '../screens/Account';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomePage from '../screens/HomePage';
import BookRider from '../screens/BookRider';
import OfferRide from '../screens/OfferRide';
import VerificationData from '../screens/VerificationData';
import RiderRoots from '../screens/RiderRoots';
import DriverRoots from '../screens/DriverRoots';
import PaymentScreen from '../screens/PaymentScreen';
import HamburgerMenu from '../screens/HamburgerMenu';
import RatingScreen from '../screens/RatingScreen';
import RequestRider from '../screens/RequestRider';
import RequestDriver from '../screens/RequestDriver';
import MapScreen from '../screens/MapScreen';
import MapScreen2 from '../screens/MapScreen2';
import GoodMessage from '../screens/GoodMessage';
const MainNavigation = () => {
    
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AccountPage">
    <Stack.Screen
        name="AccountPage"
        component={Account}
        options={{
            headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="RatingScreen"
        component={RatingScreen}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="SignUpPage"
        component={SignUp}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />

<Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
        <Stack.Screen
        name="BookRider"
        component={BookRider}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="OfferRide"
        component={OfferRide}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="fillData"
        component={VerificationData}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="RiderRoots"
        component={RiderRoots}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="DriverRoots"
        component={DriverRoots}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="HamburgerMenu"
        component={HamburgerMenu}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="RequestRider"
        component={RequestRider}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="RequestDriver"
        component={RequestDriver}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
        <Stack.Screen
        name="MapScreen2"
        component={MapScreen2}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
       <Stack.Screen
        name="GoodMessage"
        component={GoodMessage}
        options={{
          headerTitleStyle: { fontSize: 25 },
          headerShown: false,
              useNativeDriver: true,
              gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})