import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RatingScreen = () => {
    const navigation = useNavigation();
  const [rating, setRating] = useState(0);

  const handleRatingPress = newRating => {
    setRating(newRating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Your Ride</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map(star => (
          <TouchableOpacity
            key={star}
            style={styles.star}
            onPress={() => handleRatingPress(star)}
          >
            <Text style={star <= rating ? styles.selectedStar : styles.unselectedStar}>★</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.ratingText}>Your Rating: {rating}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={()  => navigation.navigate('HomePage')}>
        <Text style={styles.submitButtonText}>Rate Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    marginHorizontal: 5,
  },
  selectedStar: {
    fontSize: 30,
    color: 'gold',
  },
  unselectedStar: {
    fontSize: 30,
    color: 'gray',
  },
  ratingText: {
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default RatingScreen;
