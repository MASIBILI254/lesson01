import { View, Text,StyleSheet,ImageBackground,Pressable } from 'react-native'
import coffe1 from "@/assets/images/coffe1.png"
import React from 'react'
import { Link } from 'expo-router'
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={coffe1}
      style={styles.image}

      >
      <Text style={styles.text}>My coffe App</Text>
      <Link href={'/explore'} style={{marginHorizontal:'auto'}} asChild>
        <Pressable style={styles.Button}>
          <Text style={styles.ButtonText}> Explore</Text>
        </Pressable>
       
      </Link>
      </ImageBackground>
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'black'
  },
  text:{
    color:'white',
    fontSize:42,
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom:120,
  },
   Link:{
    color:'white',
    fontSize:42,
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding:4,
    textDecorationLine:'underline',

  },
  Button:{
    height:60,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6
  },
  ButtonText:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    padding:4,
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:"cover",
    justifyContent:'center'
  }
})