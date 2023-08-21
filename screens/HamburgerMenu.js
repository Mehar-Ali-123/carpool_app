import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import any icon library you prefer (Here, I'm using AntDesign)
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HamburgerMenu = () => {


    const navigation = useNavigation();

    const [isSliderVisible, setSliderVisible] = useState(false);

    const handleSliderToggle = () => {
        setSliderVisible(!isSliderVisible);
    };
    async function handleLogout(){
        await AsyncStorage.removeItem('user')
        navigation.navigate('AccountPage')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSliderToggle}>
                <AntDesign name="menufold" size={30} color="black" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                // transparent={true}
                visible={isSliderVisible}
                onRequestClose={() => setSliderVisible(false)}
            >
                <View style={styles.modalContainer}>
                    
                    <TouchableOpacity style={styles.modalOption} onPress={() => alert('Privacy clicked')}>
                        <Text>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => alert('Settings clicked')}>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => alert('Report clicked')}>
                        <Text>Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalOption} onPress={() => alert('Report clicked')}>
                        <Text>Rate Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.modalOption, {backgroundColor: '#C51605'}]} onPress={handleLogout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:"center", justifyContent:"center"}} onPress={handleSliderToggle}>
                        <AntDesign name="menufold" size={30} color="black" />
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOption: {
        width: "70%",
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
});

export default HamburgerMenu;