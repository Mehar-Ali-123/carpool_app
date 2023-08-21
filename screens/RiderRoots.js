import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { config } from '../config/config';
const RiderRoots = () => {
    const navigation = useNavigation();
    const [rides,setRides] = useState()
    async function getRides(){
      const res = await axios.get(`${config.api}/offers/all`)
      const result = res.data
      if(result.success) {
        setRides(result.offers)
      }
      
    }
useEffect(() => {
  getRides()
},[])
  return (
   <View>
    <View style={{ flexDirection: "row", justifyContent: "center", height: 80, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, backgroundColor: "#A794CC" }}>
          <TouchableOpacity style={{ width: "20%", alignSelf: "flex-start", paddingHorizontal: 20, marginHorizontal: 50, marginTop: 30, }} onPress={navigation.goBack}>
            <Image style={{ width: 30, height: 30, borderRadius: 50 }}
              source={{ uri: "data:image/png;base64,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" }} />
          </TouchableOpacity>
          <View style={{ width: "50%", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Driver Roots</Text>
          </View>
          <View style={{ width: "30%" }}>
          </View>
        </View>
    {/* <View>
    <Image
        source={require('../assets/Images/map.png')}
        style={styles.mapIcon}
      />
      <Text style={{marginHorizontal:20 , fontWeight:"bold",fontSize:20, marginVertical: 20,}}>Available rides are  listed below </Text>
    </View> */}
    <ScrollView>
    {rides && rides.map((e) => {
      return (
        <TouchableOpacity key={e._id} style={styles.container} onPress={()=>{
          // navigation.navigate("PaymentScreen")
          navigation.navigate("RequestDriver", {e});
          }}>
        <View style={styles.contentContainer}>
        <Text style={styles.routeName}>{e.rider && e.rider.name}</Text>
          <Text>From:</Text>
          <Text style={styles.routeName}>{e.locFrom}</Text>
        </View>
        <Image
          source={require('../assets/Images/location3.png')}
          style={styles.locationIcon}
        />
        <View style={styles.contentContainer}>
        <Text>To:</Text>
          <Text style={styles.routeName}>{e.locTo}</Text>
        </View>
      </TouchableOpacity>
      )
    })}
  
    
    </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent:"space-between",
    padding: 10,
    borderRadius: 20,
    marginVertical: 8,
    elevation: 2,
    marginHorizontal:20,
  },
  locationIcon: {
    width: 70,
    height: 70,
  },
  
  routeName: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888888',
  },
  mapIcon:{
marginTop:10,
    width:"100%",
    height:250,

  }
});

export default RiderRoots;
