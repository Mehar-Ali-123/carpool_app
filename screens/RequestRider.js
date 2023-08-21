import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RequestRider = ({route}) => {
    
  const navigation = useNavigation();
  const {e} = route.params ; 
  useEffect(()=>{
    console.log(e)
  })
  function formateDate(mydate) {
    const dateString = mydate;
    const date = new Date(dateString);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>OUR SERVICES ARE RELIABLE AND SAFE</Text>
      <View style={styles.card}>
        <View style={styles.topSection}>
          <View style={styles.driverInfoContainer}>
            <Image
              source={require('../assets/Images/driverImg.png')}
              style={styles.driverImage}
            />
            <View style={styles.driverTextContainer}>
              <Text style={styles.driverName}>{e.customer.name}</Text>
              <Text style={styles.driverContact}>Contact: {e.customer.phone}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>{e.date}</Text>
        <View style={styles.contentSection}>
          <Text style={styles.content}> Wants a Ride at {e.time}</Text>
          <Text style={styles.content}>Passengers: {e.seats}</Text>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button}  onPress={navigation.goBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.requestButton]} onPress={()=>{ navigation.navigate("MapScreen") ;}}>
            <Text style={styles.buttonText}>Request Ride</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    color: '#888888',
  },
  contentSection: {
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#333333',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  requestButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  driverTextContainer: {},
  driverName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 5,
    marginTop: 10,
  },
  driverContact: {
    color: 'white',
  },
  driverInfoContainer: {
    paddingVertical: 10,
    backgroundColor: '#A794CC',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5,
  },
});

export default RequestRider;