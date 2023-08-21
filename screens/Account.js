import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Account = () => {
    async function isUser(){
        const user = await AsyncStorage.getItem('user')
        if(user != null) {
            navigation.navigate('WelcomeScreen')
        }
    }
    useEffect(() => {
        isUser()
    })
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Ready to save time & money on your Commute?</Text>
            <View style={{ height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* <Image
                    style={styles.icons}
                    source={{ uri: "https://png.pngtree.com/png-vector/20221127/ourmid/pngtree-quarrelling-and-negative-emotions-of-car-driver-concept-png-image_6483410.png" }}
                /> */}
                <Image
                    style={styles.icons}
                    source={require("../assets/Images/5.png")}
                />
            </View>
            <View style={styles.btnDiv}>
                <TouchableOpacity style={styles.btn1} onPress={() => {
                    navigation.navigate("LoginPage");
                }}>
                    <Text style={{ textAlign: "center", letterSpacing: 1,fontWeight:"bold" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => {
                    navigation.navigate("SignUpPage"); }}
                >
                    <Text style={{ color: "white", textAlign: "center", letterSpacing: 1,fontWeight:"bold" }}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 40,
        display: "flex",
        justifyContent: "space-between",
        height: "100%"
    },
    title1: {
        // borderWidth:1,
        // borderColor:"black",
        // borderRadius:15,

        letterSpacing: 1,
        height: "20%",
        paddingHorizontal: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    icons: {
        width: "100%",
        height: "100%",
    },

    btnDiv: {

        padding: 20,
        height: "20%"
    },
    btn1: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5
    },
    btn2: {
        backgroundColor: "black",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5

    }
})