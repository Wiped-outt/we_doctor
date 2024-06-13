import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import Login from "./src/view/Login";
import Home from "./src/view/Home";
// import image from "./src/assets/Heart.png"

// import { TextInputMask } from 'react-native-masked-text';
// npm install react-native-masked-text --save

import InputTest from './src/components/InputTest';


export default function App(){

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = ('');
  const [cpf, setCPF] = ('');
  const [email, setEmail] = ('');
  const [phone, setPhone] = useState('');

  
  return(

    // background  
    <View style={styles.container}>
       
       {/* <Image
       source={require("./src/assets/wedoctor_cross.png")}
       style={styles.wedoctor_cross}
      /> */}
      {/* <Login /> */}
      <Home />
      
    </View>

    

  )
}

const styles = StyleSheet.create({
  container:{

    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  wedoctor_cross_login:{
    
    width: 60,
    height: 60,

    borderRadius: 5,

    marginTop: 40,
    marginBottom: 15,
    
  },


})