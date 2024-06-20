// Importação de módulos necessários do React e React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

// Componente principal da tela de Login
export default function Login({ navigation }) {
  // Estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hour, setHour] = useState('');
  const [data, setData] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    // Verifica se todos os campos estão preenchidos
    if (!name || !birthdate || !cpf || !email || !phone || !hour || !data) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se o CPF tem o comprimento correto
    if (cpf.length !== 14) {
      Alert.alert('Erro', 'CPF inválido.');
      return;
    }

    // Verifica se o telefone tem o comprimento correto
    if (phone.length !== 15) {
      Alert.alert('Erro', 'Telefone inválido.');
      return;
    }

    // Navega para a tela Home passando alguns dados como parâmetros
    navigation.navigate('Home', { name, hour, data });
  };

  // Renderização do componente
  return (
    <View style={styles.container_login}>
      {/* Logo do WeDoctor */}
      <Image source={require('../../assets/wedoctor_cross.png')} style={styles.wedoctor_cross_login} />

      {/* Título e subtítulo */}
      <Text style={styles.title_login}>CADASTRE-SE</Text>
      <Text style={styles.subtitle_login}>Para um atendimento mais rápido</Text>

      {/* Seção principal do formulário */}
      <View style={styles.redback_login}>
        <View style={styles.inputContainer_login}>
          {/* Campo de nome do paciente */}
          <Text style={styles.label_login}>Nome do Paciente</Text>
          <TextInput style={styles.input_login} value={name} onChangeText={setName} />

          {/* Campo de data de nascimento com máscara */}
          <Text style={styles.label_login}>Data de Nascimento</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            value={birthdate}
            onChangeText={setBirthdate}
            style={styles.input_login}
            keyboardType="numeric"
          />

          {/* Campo de CPF com máscara */}
          <Text style={styles.label_login}>CPF</Text>
          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={setCPF}
            style={styles.input_login}
            keyboardType="numeric"
          />

          {/* Campo de e-mail */}
          <Text style={styles.label_login}>E-Mail</Text>
          <TextInput style={styles.input_login} value={email} onChangeText={setEmail} />

          {/* Campo de telefone com máscara */}
          <Text style={styles.label_login}>Telefone</Text>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={phone}
            onChangeText={setPhone}
            style={styles.input_login}
            keyboardType="numeric"
          />

          {/* Labels para horário e dia da consulta */}
          <View style={styles.labelContainer_login}>
            <Text style={styles.labelHour_login}>Horário da consulta</Text>
            <Text style={styles.labelDay_login}>Dia da consulta</Text>
          </View>

          {/* Campos de horário e dia da consulta com máscaras */}
          <View style={styles.inputContainer2_login}>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'HH:mm',
              }}
              value={hour}
              onChangeText={setHour}
              style={styles.input2_login}
              keyboardType="numeric"
            />

            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={data}
              onChangeText={setData}
              style={styles.input2_login}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      {/* Botão de finalização */}
      <TouchableOpacity style={styles.button_login} onPress={handleSubmit}>
        <Text style={styles.buttontext_login}>FINALIZADO</Text>
      </TouchableOpacity>
    </View>
  );
}

// _______________________________________________________
// Estilos do componente

const styles = StyleSheet.create({
  container_login: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wedoctor_cross_login: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginTop: 40,
    marginBottom: 15,
  },
  title_login: {
    color: '#B61D10',
    fontSize: 25,
    fontWeight: '900',
  },
  subtitle_login: {
    color: '#B61D10',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redback_login: {
    marginTop: 25,
    backgroundColor: '#E91608',
    borderRadius: 10,
    height: 540,
  },
  inputContainer_login: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  inputContainer2_login: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label_login: {
    color: 'white',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  labelHour_login: {
    color: 'white',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 22.5,
  },
  labelDay_login: {
    color: 'white',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 70,
  },
  labelContainer_login: {
    flexDirection: 'row',
    marginTop: 5,
  },
  input_login: {
    backgroundColor: '#9B0E08',
    borderRadius: 10,
    marginHorizontal: 12,
    width: 330,
    height: 40,
    color: 'white',
    fontSize: 13,
    padding: 10,
  },
  input2_login: {
    backgroundColor: '#9B0E08',
    borderRadius: 10,
    marginHorizontal: 12,
    width: 150,
    height: 40,
    color: 'white',
    fontSize: 13,
    padding: 10,
    marginBottom: 10,
  },
  button_login: {
    backgroundColor: '#BE180C',
    borderRadius: 10,
    width: 125,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12.5,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  buttontext_login: {
    color: 'white',
    fontWeight: 'bold',
  },
});