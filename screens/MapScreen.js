import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const mapRef = useRef(null);
  const apiKey = '2f63d0c7af8548f6a532b3a2393b9b8f';
  const startCoordinate = { latitude: 31.5642, longitude: 74.3678 };
  const endCoordinate = { latitude: 31.6211, longitude: 74.2824 };

  const navigation = useNavigation();
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await fetch(
          `https://api.geoapify.com/v1/routing?waypoints=${startCoordinate.longitude},${startCoordinate.latitude}%7C${endCoordinate.longitude},${endCoordinate.latitude}&mode=drive&apiKey=${apiKey}`
        );

        const data = await response.json();

        if (data && data.features && data.features.length > 0) {
          const routeGeometry = data.features[0].geometry.coordinates;
          const coordinates = routeGeometry.map(([lon, lat]) => ({ latitude: lat, longitude: lon }));
          setRouteCoordinates(coordinates);
        }
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();
  }, []);

  useEffect(() => {
    // Zoom map to fit all markers and route
    if (mapRef.current && routeCoordinates.length > 0) {
      mapRef.current.fitToCoordinates(routeCoordinates, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }
  }, [routeCoordinates]);

  return (
    <View style={styles.container}>
      
      <View
        style={{
          margin:20,
          flexDirection: "row",
          justifyContent: "center",
          height: 80,
          borderRadius: 15,
          backgroundColor: "#A794CC",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            alignSelf: "flex-start",
            paddingHorizontal: 20,
            marginHorizontal: 50,
            marginTop: 30,
          }}
          onPress={navigation.goBack}
        >
          <Image
            style={{ width: 30, height: 30, borderRadius: 50 }}
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAY1BMVEUAAAD////6+vrr6+v29vbv7+/l5eVPT09LS0shISHh4eHW1tZmZmabm5uHh4c3Nzc8PDxUVFQmJiYVFRXFxcVGRka7u7ssLCx/f3+oqKh0dHSQkJCwsLAJCQkcHByioqJcXFzYDfmgAAAFTElEQVR4nL2caWOCMAyGy6lcKoLCEJX//ytHwYMj2CQtvPs4pc9okrZJOmFx5EXXOinjffG4iyw47uLyVueRw3qWoH7BiermeL4LQMExriNvVQLb+YuP0NgDneLasVcicJOdYvS3dgnhTWAJ7Ct2+F7p1TVK4Cdn0vhS58Q3RuCUGXl8qeCA8Q41gXdgDd/rpp4LFYGdaIwvlagcQ0GQ0+d/qiLXIPBK7fGlqp+++YsgByMfQ/dfr2GZwDbzAnpVy9awSBDSIpBKu5BKkD+MAgiRLc3EAsHV8PhSNYXgtgKAEAc8gUkbHKrCEqwFIESMI1gPAESYE+gsRGrNJ2JGoLsSqVSqCNZww7H+fhNEqwMIkf8i8IMNCO7RD4JmAwAhLu4iwTqhcK5qiSDfCECIK0zg6u/I0HJAgnVD0VgVRLCFI36VAwSqI6lZBe6M4LkpQHuWmRK4GwN8jfFNwFyQ0medpLyvlmMCj/WQ16nQ5XmRPyJgPeNrz6wVtRoSOJxgNAxsfxyEcEDAcYTx5vvCeMLhS2AX9K9fRwCsNSXwPgSMaZwAWD5nHusPAd2fZucflzMNxZuAHo2me712IvcMgs4hBccOp1MgZ4FhSn1olgSNPgBzd3OyOwJqPJxPAcuUOoUdQU370hMC4B4zko4gJn0HzAKwdzeNJPBO+gDslFfgtwQk/gQE0Mj45C0BxQxAAJ8/vnyioJgB6AWhDoDYtQT4HSroBZHeUbOwhIdeUm4QQMiKhV89fIE2RBDA4VUeBsoFNpaARqhnA52uAukK8BtIT5dW+167XqlUs8eax1PgTuyz7E8n13Nb2R8NfmX7NS5MlaLCfAzOhipkox7dtD9qgVOAECYzWQhEONiRaqgDeYhwfReID0XqsRZkKDl5ZwNYjhkCMCOOlBkCrh2aI2C5olGCCx8AFbURvoCt48+FCriIXSLbEDCucBeYjT4zINiYZxeodSFjIfiow2yDWxsfMEIfrb9ro9vJk/JzZGKoErj8SwYWba+vPcFrg7C/dDqdTscTevOWYPdIDxDBQBq0Ru8T10LIhYPdTgUggu7ql4WE88ID7KzRRChsYTXoT59BBL3S0KU9MxGSkQHY46SFcCOenQsQQac4I8/ODuXcFYBtNXyENs5QcygFiMAu16e2JKD5NGyOnHym1K3LIxEzEAWEwE0k9bk0m/gHnKEdC69WWfT5RLI7HQEEniXILagkIO/qz3Nz5C0Q0YvAIuXzpI4zBFZwzqw3ATGrKhGmR0laWvSl54eAUfM+TRA4Oc3M/xBwgtrYHFlm0LcG9QQhIyE1fAu8pGY0ILBQ6Y4pwuct8FJ6r+4oofFHZH2OldtMG40IuGvLriy5nZTvBrE3gaFcA0HhhGDTHhCpT17kQ4DJOhlU5swINuhIG+pbKBj04nA8kqvGggi0aiVEhSABY4HialgrGfWlsRY4hhpriYBW+GNrvNMcdwdu05c1bpGc9Ghu4ZKToum0T3XtRtl5gnTWq7t2VGimA877lZtVAea1CqBnm9lKgNJlXiyB+tbXQ9gD1Rqwd79ZCQAsF4EEuCoZWTFYr1q4w7GGUy4kyJfusZgPTQuXSJbv8kRm14jj4pWm5ftMnsmVcrd8y+/XnS5z+wWwcI8gsHwzryFdvE2lJGgNUn8Hnf39Lhqr7jd6uqEhVt3zVN/x9HUYYnV9CHPPNeSaA2J87F3fqKLbwx01Pv6+s/OkMdyTnw7AIGgVHbCJikdJKA/S7r1Hh0aVssrSQ7TWvfdeYX64FDDGvbgc8pDaMkImkHKjvL7F6bdGFqSV/AcIrH6Vf0IPO0/0WocJAAAAAElFTkSuQmCC",
            }}
          />
        </TouchableOpacity>
        <View style={{ width: "60%", justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {" "}
           here is the map
          </Text>
        </View>
        <View style={{ width: "20%" }}></View>
      </View>

      <MapView style={styles.map} ref={mapRef}>
        <Marker coordinate={startCoordinate} title="Start" />
        <Marker coordinate={endCoordinate} title="End" />
        <Polyline coordinates={routeCoordinates} strokeWidth={3} strokeColor="blue" />
      </MapView>
      <View>
        <TouchableOpacity style={styles.btn2} onPress={()=>{navigation.navigate('GoodMessage')}}>
          <Text style={{ color: "white", textAlign: "center", letterSpacing: 1, fontWeight: "bold", paddingVertical: 5 }}>Lets Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    width: '100%',
    height: 400,
  },
  heading: {
    padding: 0,
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold',
    color: "white"
  },
  btn2: {
    backgroundColor: "black",
    padding: 10,
    paddingHorizontal:80,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 5,
  }
});

export default MapScreen;