import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

// Define o componente funcional Input
const Input = () => {
  return (
    // Container principal do componente
    <View style={styles.container}>
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent" // Remove a linha sublinhada padrão no Android
        placeholderTextColor={'white'} // Define a cor do texto do placeholder como branco
      />
    </View>
  );
};

// ______________________________________________________________
// Estilos

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Organiza os filhos em uma linha
  },
  input: {
    backgroundColor: '#9B0E08', 
    borderRadius: 5, 
    width: 355, 
    height: 32, 
    color: 'white', 
    fontSize: 13, 
    padding: 5, 
  },
});


export default Input;