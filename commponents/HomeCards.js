
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HomeCards = () => {
    const navigation = useNavigation();
    return (

        <View>
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.93} onPress={() => {
                    navigation.navigate("BookRider"); 
                    // navigation.navigate("fillData"); 
                    }}>
                    <View style={[styles.cards, { position: "relative", justifyContent: "flex-end" }]} >
                        <Image style={[styles.imgMenu, { position: "absolute", right: 0, top: -30 }]} source={require("../assets/Images/car5.png")} />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 5, }}>
                            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", width: "50%" }}>
                                Book a Ride
                            </Text>
                            <Image style={{ width: 40, height: 40, borderRadius: 50 }}
                                source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/right-arrow-37.png" }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.93}  onPress={() => {
                        // navigation.navigate("OfferRide");
                        // navigation.navigate("OfferRide"); 
                        navigation.navigate("fillData"); 
                    }}
                >
                    <View style={[styles.cards, { position: "relative", justifyContent: "flex-end", backgroundColor: "#EAB793" }]} >
                        <Image style={[styles.imgMenu, { position: "absolute", right: 0, top: -20, width: 150, height: 70, }]} source={require("../assets/Images/car8.png")} />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 5, }}>
                            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", width: "50%" }}>
                                Offer a Ride
                            </Text>
                            <Image style={{ width: 40, height: 40, borderRadius: 50 }}
                                source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/right-arrow-37.png" }} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.93}>
                    <View style={[styles.cards, { position: "relative", justifyContent: "flex-end", backgroundColor: "#BDD2EF" }]} >
                        <Image style={[styles.imgMenu, { position: "absolute", right: 0, top:0}]} source={require("../assets/Images/carpoollogo2.png")} />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 5, }}>
                            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", width: "100%",paddingHorizontal:5, }}>
                                Community
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.93}>
                    <View style={[styles.cards, { position: "relative", justifyContent: "flex-end", backgroundColor: "#BDD2EF" }]} >
                        <Image style={[styles.imgMenu, { position: "absolute", right: 0, top:0}]} source={require("../assets/Images/map.png")} />
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 5, }}>
                            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", width: "100%",textAlign:"center", }}>
                                My Route
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default HomeCards

const styles = StyleSheet.create({

    cardContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    cards: {
        backgroundColor: "#A794CC",
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 2,
        // padding: 20,
        width: 150,
        height: 150,
        margin: 5,
    },
    imgMenu: {
        width: "100%",
        height: 100,
    },
    card: {
        width: 180,
        height: 180,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 1,
    },
    inner: {

        width: '100%',
        height: '100%',
    },
});