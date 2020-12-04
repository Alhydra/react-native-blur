import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      style={styles.container}
      source={{uri: 'https://wallpapercave.com/wp/wp2532971.jpg'}}
      blurRadius={100}
    >
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Find yourself  outside.</Text>
      <Text style={styles.body}>
        Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.
      </Text>
      <TouchableOpacity
          style={styles.exploreBtn}
        >
          <Text style={styles.exploreBtnTxt}>Explore Now!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A0CA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width:274,
    height:274
  },
  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"white",
    width:"70%",
    textAlign:"center",
    marginBottom:10,
    lineHeight:49
  },
  body: {
    width:"70%",
    color:"white",
    fontSize:14,
    lineHeight:24
  },
  exploreBtn:{
    width:"70%",
    backgroundColor:'#F72585',
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    marginTop:100
  },
  exploreBtnTxt: {
    color:"white",
  }
});
