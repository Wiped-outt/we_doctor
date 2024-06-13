import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';

// import { TextInputMask } from 'react-native-masked-text';
// npm install react-native-masked-text --save



function Login(){

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = ('');
  const [cpf, setCPF] = ('');
  const [email, setEmail] = ('');
  const [phone, setPhone] = useState('');

  
  return(

    // background  
    <View style={styles.container_login}>
         
         <Image
        source={require('../../assets/wedoctor_cross.png')}
        style={styles.wedoctor_cross_login}
      />

      <Text style={styles.title_login}>CADASTRE-SE</Text>
      <Text style={styles.subtitle_login}>
        Para um atendimento mais rápido</Text>

{/* ------------------------- Divisão 1 --------------------------- */}

    <View style={styles.redback_login}>

    <View style={styles.inputContainer_login}>

      <Text style={styles.label_login}>Nome do Paciente</Text>
      <TextInput
        style={styles.input_login}
        value={name}
        onChangeText={setName}
        placeholder=""
      />

      <Text style={styles.label_login}>Data de Nascimento</Text>
      <TextInput
        style={styles.input_login}
        value={birthdate}
        onChangeText={setBirthdate}
        placeholder=""
        keyboardType='numeric'
      />

      <Text style={styles.label_login}>CPF</Text>
      <TextInput
        style={styles.input_login}
        value={cpf}
        onChangeText={setCPF}
        placeholder=""
        keyboardType='numeric'
      />

      <Text style={styles.label_login}>E-Mail</Text>
      <TextInput
        style={styles.input_login}
        value={email}
        onChangeText={setEmail}
        placeholder=""
      />

      <Text style={styles.label_login}>Telefone</Text>
      <TextInput
        style={styles.input_login}
        // type={'cel-phone'}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
        keyboardType='numeric'
      />




      <View style={styles.labelContainer_login}>

      <Text style={styles.labelHour_login}>Horário da consulta</Text>
      <Text style={styles.labelDay_login}>Dia da consulta</Text>

      </View>




      <View style={styles.inputContainer2_login}>

      <TextInput
        style={styles.input2_login}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
        keyboardType='numeric'
      />

      
      <TextInput
        style={styles.input2_login}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
        keyboardType='numeric'
      />

    </View>

    </View>


    </View>

{/* ------------------------- Divisão 2 --------------------------- */}

      <TouchableOpacity style={styles.button_login}>
        <Text style={styles.buttontext_login}>FINALIZADO</Text>
      </TouchableOpacity>

    </View>

)}

const styles = StyleSheet.create({

    container_login:{
  
        flex:1,   
        backgroundColor: "#fff",   
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

  

  title_login:{

    color: "#B61D10",
    fontSize: 25,
    fontWeight: '900',
    
  },

  subtitle_login:{

    color: "#B61D10",
    fontsize: 50,
    fontWeight: 'bold',
    
    
  },

//  --------------------------- Style 1 -----------------------------  //

  redback_login:{
    
  marginTop: 25,  

  backgroundColor: "#E91608",
  borderRadius: 10,
  height: 540,


  },

  inputContainer_login:{

    marginTop: 20,
    marginHorizontal: 20,

  },

  inputContainer2_login:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  label_login:{

    color: "white",
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,

  },

  labelHour_login:{

    color: "white",
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,

    marginLeft: 15,

  },

  labelDay_login:{

    color: "white",
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,

    marginLeft: 70,

  },
  

  labelContainer_login: {

    flexDirection: 'row',
    marginTop: 5,

  },

  input_login:{

    backgroundColor: "#9B0E08",
    borderRadius: 10,
    marginHorizontal: 12,

    width: 330,
    height: 40,

    color: 'white',
    fontSize: 13,
    padding: 10,

  },

  input2_login:{

    backgroundColor: "#9B0E08",
    borderRadius: 10,
    marginHorizontal: 7,

    width: 150,
    height: 40,

    color: 'white',
    fontSize: 13,
    padding: 10,
    
    marginBottom: 20,
    

  },

//  --------------------------- Style 2 -----------------------------  //

  button_login:{

    backgroundColor: "#BE180C",
    borderRadius: 10,
    width: 125,
    height: 35,

    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: 20,
    marginBottom: 20,

    shadowColor: 'black', // Cor da sombra
    shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 5, // Raio de desfoque da sombra
    elevation: 10, // Elevação (para Android)

  },

  buttontext_login:{
    color: "white",
    fontWeight: 'bold',
    
  }


})

export default Login;