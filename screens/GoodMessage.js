import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const GoodMessage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Set modalVisible to true after a delay when the screen is displayed
    const timer = setTimeout(() => {
      setModalVisible(true);
    }, 10); // Change the delay time as needed (3000ms = 3 seconds)

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleRateUs = () => {
    navigation.navigate("RatingScreen")
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.goBack(); // Navigate back one step
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal isVisible={modalVisible}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
          <TouchableOpacity onPress={handleCloseModal} style={{ position: 'absolute', top: 10, right: 10 }}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginBottom: 20 }}>Have a safe journey with Carpool</Text>
          <TouchableOpacity onPress={handleRateUs} style={{ backgroundColor: '#A794CC', padding: 10, borderRadius: 5 }}>
            <Text style={{color:"white"}}>Rate Us</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default GoodMessage;