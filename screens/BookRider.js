import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import HomeSliderDetail from '../commponents/HomeSliderDetail';import { Calendar } from 'react-native-calendars';
import { Calendar } from "react-native-calendars";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AntDesign } from "@expo/vector-icons";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { config } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookRider = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const hasErrors = Object.keys(errors).length > 0;
  const navigation = useNavigation();
  // CLOCK
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const handleTimeConfirm = (time) => {
    const formattedTime = moment(time).format("h:mm A");
    setSelectedTime(formattedTime);
    setValue("time", formattedTime);
    setTimePickerVisible(false);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  // CALENDER
  const [selectedDate, setSelectedDate] = useState("");
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const onDayPress = (day) => {
    const formattedDate = moment(day.dateString).format("MMMM D, YYYY");
    setSelectedDate(formattedDate);
    setValue("date", formattedDate);
    setCalendarVisible(false);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleCloseCalendar = () => {
    setCalendarVisible(false);
  };
  const onSubmit = async (data) => {
    const getUser = await AsyncStorage.getItem("user");
    const userJson = JSON.parse(getUser);
    const finalData = { ...data, customer: userJson._id };
    try {
      const res = await axios.post(`${config.api}/rides/add`, finalData);
      const result = res.data;
      if(result.success){
        Alert.alert('Success', "Our Riders Will contact you soon", [{text: "ok"}])
        navigation.navigate('RiderRoots')
        // navigation.navigate('DriverRoots')
      }
    } catch (e) {
      Alert.alert("Oops!", "Error Occurred",[ {text: "ok"}])
    }
    
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          height: 80,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
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
              uri: "data:image/png;base64,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",
            }}
          />
        </TouchableOpacity>
        <View style={{ width: "60%", justifyContent: "center" }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Book A RIDE
          </Text>
        </View>
        <View style={{ width: "20%" }}></View>
      </View>
      {hasErrors && (
        <Text style={[styles.error, styles.p]}>All Fields are required</Text>
      )}
      <Text style={styles.loginTxt}>Here is my Routine</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('RiderRoots')}><Text>Rider</Text></TouchableOpacity>
     
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="contact"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <View style={styles.inputContainer}>
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/profile3.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="Phone Number (e.g 0312 12121212)"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
                inputMode="numeric"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="fromLoc"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <View style={styles.inputContainer}>
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/location2.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="From "
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="toLoc"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <View style={styles.inputContainer}>
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/location2.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="To"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="seats"
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <View style={styles.inputContainer}>
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/2.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="Available Passengers"
                autoCorrect={false}
                onChangeText={field.onChange}
                value={field.value}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="time"
          defaultValue={selectedTime && selectedTime}
          rules={{ required: true }}
          render={({ field }) => (
            <TouchableOpacity
              onPress={showTimePicker}
              style={styles.inputContainer}
            >
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/clock.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="Choose Time"
                editable={false}
              />
            </TouchableOpacity>
          )}
        />

        <Controller
          control={control}
          name="date"
          defaultValue={selectedDate}
          render={({ field }) => (
            <TouchableOpacity
              onPress={toggleCalendar}
              style={styles.inputContainer}
            >
              {/* ... icon and styling ... */}
              <View
                style={{
                  width: "20%",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  marginHorizontal: 5,
                  borderColor: "#A794CC",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ alignSelf: "center", width: 50, height: 50 }}
                  source={require("../assets/Images/calender2.png")}
                />
              </View>
              <TextInput
                style={styles.inp1}
                {...field}
                placeholder="Choose Your Date"
                editable={false}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Calender  */}
      <Modal
        isVisible={isCalendarVisible}
        onBackdropPress={handleCloseCalendar}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseCalendar}
          >
            <Icon name="times" size={20} color="black" />
          </TouchableOpacity>
          <Calendar
            onDayPress={onDayPress}
            style={{ marginBottom: 10 }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
          />
        </View>
      </Modal>

      {/* Clock */}
      <Modal isVisible={isTimePickerVisible} onBackdropPress={hideTimePicker}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={hideTimePicker}>
            <Icon name="times" size={20} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />

          {selectedTime && (
            <View style={styles.selectedTimeContainer}>
              <Text style={styles.selectedTime}>
                Selected Time: {selectedTime}
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedTime(null)}
              >
                <AntDesign name="closecircle" size={20} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>

      {/* <HomeSliderDetail/> */}
      <TouchableOpacity style={styles.btn2} onPress={handleSubmit(onSubmit)}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            letterSpacing: 1,
            fontWeight: "bold",
            paddingVertical: 5,
          }}
        >
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookRider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  loginTxt: {
    textAlign: "center",
    marginHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    // borderdColor: "#C5D8E1",
    // borderWidth: 1,
    // marginTop: 10,
    marginBottom:10,
    letterSpacing: 1,
    fontSize: 25,
    fontWeight: "bold",
    width: "100%",
  },
  p: {
    letterSpacing: 0.5,
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  formContainer: {
    marginTop: 20,
    height: "50%",
    justifyContent: "space-evenly",
  },
  inputContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  inp1: {

    width: "75%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical:20,
    height: 50,
    alignSelf: "center",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  btn2: {
    backgroundColor: "black",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  error: {
    color: "red",
    margin:0,
    padding:0
  },
});
