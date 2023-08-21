import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableOpacity,ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';

const ProfilePicture = () => {

  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [lisenceFrontImage1, setLisenceFrontImage1] = useState(null);
  const [lisenceBackImage1, setLisenceBackImage1] = useState(null);

  useEffect(() => {
    // Request permission to access the device's gallery
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const lisenceFrontImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLisenceFrontImage1(result.uri);
    }
  };
  const lisenceBackImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLisenceBackImage1(result.uri);
    }
  };

  const uploadImage = async () => {
    // navigation.navigate("BookRider"); 
    navigation.navigate("OfferRide");
    if (image) {
      const formData = new FormData();
      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
      if (lisenceFrontImage1) {
        formData.append('lisenceFrontImage1', {
          uri: lisenceFrontImage1,
          type: 'image/jpeg',
          name: 'idcard.jpg',
        });
      }
      if (lisenceBackImage1) {
        formData.append('lisenceFrontImage1', {
          uri: lisenceBackImage1,
          type: 'image/jpeg',
          name: 'idcard.jpg',
        });
      }
      try {
        const response = await axios.post('YOUR_UPLOAD_URL', formData);
        // Handle the response from the server
        console.log(response.data);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
  };


  return (
    <View style={styles.main}>
      <ScrollView style={{height:"80%"}}>
        <View style={{ flexDirection: "row", justifyContent: "center", height: 80, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: "#A794CC" }}>
          <TouchableOpacity style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 50, marginTop: 30, marginRight: 0 }} onPress={navigation.goBack}>
            <Image style={{ width: 30, height: 30, borderRadius: 50 }}
              source={{ uri: "data:image/png;base64,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" }} />
          </TouchableOpacity>
          <View style={{ width: "60%", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}> Fill Out Your Data</Text>
          </View>
          <View style={{ width: "20%" }}>
          </View>
        </View>
        {image && <Image source={{ uri: image }} style={{ marginVertical:10,alignSelf:"center",width: 150, height: 150, borderRadius: 75 }} />}
        <TouchableOpacity style={{ marginVertical: 10, backgroundColor: "black", padding: 10, borderRadius: 15 }} onPress={pickImage}>
          <Text style={{ color: "white", textAlign: "center", }}>Select your Profile Picture from gallery</Text>
        </TouchableOpacity>
      
        {lisenceFrontImage1 && <Image source={{ uri: lisenceFrontImage1 }} style={{ width: 300, height: 200, borderRadius: 50 }} />}
        <TouchableOpacity style={{ marginVertical: 10, backgroundColor: "black", padding: 10, borderRadius: 15 }} onPress={lisenceFrontImage}>
          <Text style={{ color: "white", textAlign: "center", }}>Select your Lisence front Picture </Text>
        </TouchableOpacity>
        {lisenceBackImage1 && <Image source={{ uri: lisenceBackImage1 }} style={{ width: 300, height: 200, borderRadius: 50 }} />}
        <TouchableOpacity style={{ marginVertical: 10, backgroundColor: "black", padding: 10, borderRadius: 15 }} onPress={lisenceBackImage}>
          <Text style={{ color: "white", textAlign: "center", }}>Select your Lisence back Picture </Text>
        </TouchableOpacity>
        

      </ScrollView>
      <View style={{height:"20%"}}>
        <TouchableOpacity style={{ marginTop: 10, }} onPress={uploadImage}>
          <Text style={{ color: "white", backgroundColor: "black", padding: 10, textAlign: "center", borderRadius: 15 }}>Upload images</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: { paddingHorizontal: 5, display: "flex",justifyContent: "space-between", height:"100%"},
})
export default ProfilePicture;
