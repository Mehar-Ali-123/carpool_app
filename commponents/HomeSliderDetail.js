import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native'
import React,{ useState, useEffect, useRef } from 'react'
import HomeSliderApi from '../API/HomeSliderApi'
import {  useNavigation } from '@react-navigation/native'

 
const HomeSliderDetail = () => {
  const navigation=useNavigation();
  // const onpressButton=()=>{
  //   navigation.navigate("Student")
  // }
  
  const [data, setData] = useState([
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '4', text: 'Item 4' },
    { key: '5', text: 'Item 3' },
    // Add more items as needed
  ]);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-scroll to the next item every 2 seconds (adjust as needed)
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Scroll back to the first item
        flatListRef.current.scrollToIndex({ index: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data]);


  const CardData=({item})=>{
return(
  <View style={styles.mainContainer}> 
 <View style={styles.courseContainer}>
<Image  style={styles.img} source={item.image} resizeMode="contain" />
<View style={{position:"absolute",}}>

</View>
</View>
  </View>
)
  }
  return (
    <View>
      <FlatList ref={flatListRef} data={HomeSliderApi} showsHorizontalScrollIndicator={false} horizontal keyExtractor={(item)=>item.id} renderItem={CardData} />
    </View>
  )
}

export default HomeSliderDetail

const styles = StyleSheet.create({
  mainContainer:{
   
  },
  courseContainer:{
    marginVertical:10,
    marginHorizontal:5,
    borderWidth:1.5,
    borderColor:"purple",
    borderRadius:15,
 alignItems:"center",
 overflow:"hidden",
 width:300,
 height:200,
    position:"relative",
    shadowColor:"purple",
shadowOffset:{width:2,height:2},
shadowOpacity:0,
shadowRadius:0.9,
elevation:8
  },
  img:{
  width:"100%",
  height:"100%",
  

  },
  cardTitle:{
    color:"white",
    fontSize:30,
    fontWeight: '500',
    textAlign:"center",


  },
  cardDescription:{
    color:"white",
    textAlign:"justify",
  },
  cardprice:{
    marginTop:10,
    color:"white",
    alignSelf:"flex-end",
    backgroundColor:"black",
    fontWeight:"bold",
borderRadius:10,
paddingHorizontal:15,
paddingVertical:10
  }

})