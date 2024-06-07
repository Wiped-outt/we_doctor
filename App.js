import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { useState } from 'react';

import InputTest from './src/components/InputTest';


export default function App(){

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = ('');
  const [cpf, setCPF] = ('');
  const [email, setEmail] = ('');
  const [phone, setPhone] = ('');

  
  return(

    // background  
    <View style={styles.container}>
      
      <Image
       source={require("./src/assets/wedoctor_cross.png")}
       style={styles.wedoctor_cross}
      />

      <Text style={styles.title}>CADASTRE-SE</Text>
      <Text style={styles.subtitle}>Para um atendimento mais rápido</Text>

{/* ------------------------- Divisão 1 --------------------------- */}

    <View style={styles.redback}>

    <View style={styles.inputContainer}>

      <Text style={styles.label}>Nome do Paciente</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder=""
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        value={birthdate}
        onChangeText={setBirthdate}
        placeholder=""
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCPF}
        placeholder=""
      />

      <Text style={styles.label}>E-Mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder=""
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
      />




      <View style={styles.inputContainer2}>

      <Text style={styles.label}>Horário da consulta</Text>
      <Text style={styles.label}>Dia da consulta</Text>

      </View>




      <View style={styles.inputContainer2}>

      <TextInput
        style={styles.input2}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
      />

      
      <TextInput
        style={styles.input2}
        value={phone}
        onChangeText={setPhone}
        placeholder=""
      />

    </View>

    </View>


    </View>

{/* ------------------------- Divisão 2 --------------------------- */}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>FINALIZADO</Text>
      </TouchableOpacity>

    </View>

    

  )
}

const styles = StyleSheet.create({
  container:{
  
    flex:1,
    backgroundColor: "#fff",   
    justifyContent: 'center',
    alignItems: 'center'
  },

  wedoctor_cross:{
    width: 70,
    height: 70,

    borderRadius: 10,

    marginBottom: 25,
    
  },

  
  
    title:{
  
      color: "#B61D10",
      fontSize: 25,
      fontWeight: '900',
      
    },
  
    subtitle:{
  
      color: "#B61D10",
      fontsize: 50,
      
      
    },

//  --------------------------- Style 1 -----------------------------  //

    redback:{
      
    marginTop: 20,  

    backgroundColor: "#E91608",
    borderRadius: 15,
    height: 520,


    },

    inputContainer:{
      marginTop: 30,
      marginHorizontal: 20,

    },

    inputContainer2:{
      flexDirection: 'row',
      justifyContent: 'space-between',

    },

    label:{
      color: "white",
      fontWeight: '500',
      marginTop: 10,
      marginBottom: 10,
    },

    input:{
      backgroundColor: "#9B0E08",
      borderRadius: 5,

      width: 355,
      height: 35,

      color: 'white',
      fontSize: 13,
      padding: 5,

    },

    input2:{
      backgroundColor: "#9B0E08",
      borderRadius: 5,

      width: 150,
      height: 35,

      color: 'white',
      fontSize: 13,
      padding: 5,
      

    },

//  --------------------------- Style 2 -----------------------------  //

  button:{

    backgroundColor: "#BE180C",
    borderRadius: 10,
    width: "40%",
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

  buttontext:{
    color: "white",
    fontWeight: 'bold',
    
  }


})