import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import  axios  from "axios";
import { config } from "../config/config";
const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation();
  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = async (data) => {
    console.log(data)
    // Handle your form data here
    // navigation.navigate("LoginPage");
   try{
    const res = await axios.post(`${config.api}/user/add`, data);
    const result = await res.data;
   if(result.success){
    Alert.alert("Congratulations!", "You are now a part of Carpool", [{ text: "Login" }]);
    navigation.navigate("LoginPage");
   }else{
    Alert.alert("Oops!", result.error, [{ text: "OK" }]);
   }
   }catch(e){
    console.log(e.message)
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
      <Text style={styles.loginTxt}>Lets Create Your Account</Text>
      <Text style={styles.p}>
        We will walk you through a few simple steps to establish an account{" "}
      </Text>
      {hasErrors && (
        <Text style={[styles.error, styles.p]}>All Fields are required</Text>
      )}
      <View style={styles.formContainer}>
        <View
          style={styles.inputContainer}
        >
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                style={styles.inp1}
                placeholder="Full Name"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                style={styles.inp1}
                placeholder="ُPhone Number 0301-2232222"
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
                placeholder="ُEmail"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="email"
          />
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={[
              styles.inp,
              { backgroundColor: maleGender ? "black" : "white" },
              { justifyContent: "center", alignItems: "center" },
            ]}
            onPress={() => {
              setMaleGender(true);
              setFemaleGender(false);
            }}
          >
            <Text style={{ color: maleGender ? "white" : "black" }}>Male</Text>
          </Pressable>
          <Pressable
            style={[
              styles.inp,
              { backgroundColor: femaleGender ? "black" : "white" },
              { justifyContent: "center", alignItems: "center" },
            ]}
            onPress={() => {
              setMaleGender(false);
              setFemaleGender(true);
            }}
          >
            <Text style={{ color: femaleGender ? "white" : "black" }}>
              Female
            </Text>
          </Pressable>
        </View> */}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.inp,
                  {
                    backgroundColor: field.value === "male" ? "black" : "white",
                  },
                  { justifyContent: "center", alignItems: "center" },
                ]}
                onPress={() => field.onChange("male")}
              >
                <Text
                  style={[
                    styles.genderText,
                    field.value === "male" ? styles.selectedGenderText : null,
                  ]}
                >
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inp,
                  {
                    backgroundColor:
                      field.value === "female" ? "black" : "white",
                  },
                  { justifyContent: "center", alignItems: "center" },
                ]}
                onPress={() => field.onChange("female")}
              >
                <Text
                  style={[
                    styles.genderText,
                    field.value === "female" ? styles.selectedGenderText : null,
                  ]}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="gender"
        />

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            rules={{ required: true, min: 8 }}
            render={({ field }) => (
              <TextInput
                style={styles.inp1}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="password"
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btntxt}>Submit</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            textAlign: "center",
            flexDirectio: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Already have an account ?</Text>
          <Pressable
            style={{ marginHorizontal: 10 }}
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold" }}>
              Back to Login
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  loginTxt: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    // backgroundColor: "#C5D8E1",
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  p: {
    letterSpacing: 0.5,
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  formContainer: {
    marginTop: 20,
    height: "70%",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  inp: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: "49%",
    marginVertical: 5,
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  inpname: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: "50%",
    marginVertical: 5,
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  inp1: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: "100%",
    marginVertical: 5,
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btn: {
    paddingHorizontal: 20,
    width: "100%",
  },
  btntxt: {
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    padding: 10,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "black",
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  },
  selectedGenderText: {
    color: "white",
  },
  error: {
    color: "red",
  },
});
