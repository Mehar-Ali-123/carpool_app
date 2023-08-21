import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const [user,setUser] = useState()
    async function getUser() {
        try{
            const isUser  = await AsyncStorage.getItem('user')
            if(isUser){
                setUser(JSON.parse(isUser))
            }
        }catch(e){
            console.log(e.message)
        }
    }   
    useEffect(()=> {
        getUser()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
            <Image
                    style={styles.icons}
                    source={require("../assets/Images/welcome.png")}
                />
            </View>
            <View style={styles.txtContainer}>
                <Text style={styles.welcomeTxt}>Welcome to Carpool</Text>
                <Text style={{textAlign:"justify",marginVertical:10}}>Welocme {user && user.name} to Carpool the Carpooling App that contact you with people in your community who are going your way ,Save money , Reduce Traffic and make new friends!</Text>
                <TouchableOpacity style={styles.btn2}
                    onPress={() => {
                        navigation.navigate("HomePage");
                    }}
                >
                    <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontWeight:"bold"}}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        alignItems:"center",
        height: "100%",
        width: "100%",

    },
    imgContainer: {
        height: "70%",
        width: "100%",
        justifyContent:"flex-end"
    //    borderWidth:1,
    //    borderColor:"black"
    },
    icons: {
        width: "100%",
        height: 500,
    },
    txtContainer: {
        height: "30%",
        width: "100%",
        paddingHorizontal: 20,

    },
    welcomeTxt: {
        // paddingVertical: 8,
        letterSpacing:1,
        fontSize: 25,
        fontWeight: "bold",
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