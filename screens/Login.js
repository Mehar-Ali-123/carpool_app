import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  
} from "react-native";
import CheckBox from "expo-checkbox";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { config } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";




function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const hasErrors = Object.keys(errors).length > 0;
  const navigation = useNavigation();
  const onSubmit = async (data) => {
   
   try{
    const res = await axios.post(`${config.api}/user/login`, data);
    const result = await res.data;
   if(result.success){
    Alert.alert("Congratulations!", "You are logged in", [{ text: "ok" }]);
    await AsyncStorage.setItem('user', JSON.stringify(result.success));
    navigation.navigate("WelcomeScreen");
   }else{
    Alert.alert("Oops!", result.error, [{ text: "OK" }]);
   }
   }catch(e){
    Alert.alert("Oops!", e.message, [{ text: "OK" }]);
   }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignSelf: "flex-start", marginHorizontal: 20, marginTop: 30 }}
        onPress={navigation.goBack}
      >
        <Image
          style={{ width: 30, height: 30, borderRadius: 50 }}
          source={{
            uri: "data:image/png;base64,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",
          }}
        />
      </TouchableOpacity>

      <Text style={styles.loginTxt}>Helo Again</Text>
      <Text style={styles.p}>
        You can reach us any time via Login by phone number{" "}
      </Text>
      {hasErrors && (
        <Text style={[styles.error, styles.p]}>All Fields are required</Text>
      )}
      <View
        style={{
          height: "35%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 10,
        }}
      >
        <Image
          style={styles.icons}
          source={require("../assets/Images/taxi.png")}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          marginVertical: 10,
          backgroundColor: "white",
          width: "100%",
          padding: 20,
        }}
      >
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                style={styles.inp1}
                placeholder="Phone e.g xxxx-xxxxxxx"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
                inputMode="numeric"
              />
            )}
            name="phone"
          />
        </View>
        <View style={styles.inputContainer}>
        <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                style={styles.inp1}
                placeholder="Password"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="password"
          />
        </View>

        <Text
          style={{ color: "#515151", textAlign: "right", letterSpacing: 1 }}
        >
          Forgot password?
        </Text>
      
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "black" }]}
          
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={[
              styles.btntxt,
              { fontWeight: "bold" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },

  loginTxt: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // backgroundColor: "#C5D8E1",
    letterSpacing: 1,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  icons: {
    width: "100%",
    height: "110%",
  },
  p: {
    letterSpacing: 1,
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },

  inp1: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    width: "100%",
    marginVertical: 5,
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btn: {
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
    color: "white",
  },
  btntxt: {
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
  },

  wraper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  wraperTxt: {
    letterSpacing: 1,
    color: "grey",
  },
  error: {
    color: "red",
  },
});

export default Login;
