import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import HomeSliderDetail from '../commponents/HomeSliderDetail'
import HomeCards from '../commponents/HomeCards'
import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from './HamburgerMenu';
const HomePage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",height:80,borderBottomRightRadius:15,borderBottomLeftRadius:15,backgroundColor:"#A794CC"}}>
            <View style={{ width: "73%",justifyContent:"center",alignItems:"center" }}>
                    <Image style={{ alignSelf: "center", width: 300, height:70 }} source={require("../assets/Images/logo.png")}></Image>
                </View>
                <TouchableOpacity  style={{ width: "10%",justifyContent:"center",alignItems:"center"}}>
                    {/* <Image style={{ alignSelf: "center", width: 50, height: 40 }} source={require("../assets/Images/menu.png")}></Image> */}
                <HamburgerMenu/>
                </TouchableOpacity>
            </View>
            <HomeSliderDetail />
            <HomeCards />

            <View>
            <TouchableOpacity style={styles.btn2} 
                >
                    <Text style={{ color: "white", textAlign: "center", letterSpacing: 1,fontWeight:"bold",paddingVertical:5 }}>Lets Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent:"space-between"
    },
    btn2: {
        backgroundColor: "black",
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
marginHorizontal:5,
    }
})