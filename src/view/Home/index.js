import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';

export default function Home({ navigation, route }) {
  const { name, hour, data } = route.params;
  const [search, setSearch] = React.useState('');

  return (
    <SafeAreaView style={styles.container_Home}>
      {/* Cabeçalho vermelho */}
      <View style={styles.redback_Home}>
        <View style={styles.top_Home}>
          <Image
            source={require('../../assets/wedoctor_cross.png')}
            style={styles.wedoctor_cross_Home}
          />
          <TouchableOpacity style={styles.bell_button_Home}>
            <Image source={require('../../assets/bell.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.container2_Home}>
          <Text style={styles.title_Home}>Bem-vindo, {name}!</Text>
          <TextInput
            style={styles.input_search_Home}
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquisar"
            placeholderTextColor="#FFF"
          />
        </View>
      </View>

{/* ------------------------- Divisão 1 --------------------------- */}

      {/* Conteúdo principal */}
      <View style={styles.mainContent}>
        {/* Seção de atendimentos */}
        <View style={styles.button_container_Home}>
          <Text style={styles.title2_Home}>Atendimentos</Text>
          <View style={styles.button_list1_Home}>
            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/heart.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Cardiologista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/eye.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Oftalmologista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/medic.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Clinico Geral</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button_list2_Home}>
            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/bones.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Ortopedista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/tooth.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Odontologia</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Home}>
              <Image source={require('../../assets/stomach.png')} style={styles.icon_button_Home} />
              <Text style={styles.buttontext_Home}>Gastroenterologista</Text>
            </TouchableOpacity>
          </View>
        </View>

{/* ------------------------- Divisão 2 --------------------------- */}

        {/* Seção de agendamentos */}
        <View style={styles.bottom_Home}>
          <Text style={styles.title3_Home}>Seus agendamentos</Text>
          <View style={styles.container_agendamento_Home}>
            <View style={styles.agendamento_Home}>
              <View style={styles.row}>
                <View style={styles.info_Home}>
                  <Text style={styles.atendimento_Home}>Cardiologista</Text>
                  <Text style={styles.doctor_Home}>Dr. Romeu Lima Souza</Text>
                  <Text style={styles.confirmation_Home}>AGENDADO</Text>
                </View>

                <View style={styles.info2_Home}>
                  <View style={styles.time_background_Home}>
                    <Text style={styles.time_Home}>{data}</Text>
                  </View>
                  <View style={styles.time_background_Home}>
                    <Text style={styles.time_Home}>{hour}</Text>
                  </View>
                  <TouchableOpacity>
                    <Text
                      style={styles.change_Home}
                      onPress={() => {
                        navigation.navigate('Login');
                      }}
                    >
                      Mudar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

{/* ------------------------- Divisão 3 --------------------------- */}

      {/* Barra de navegação fixa */}
      <View style={styles.redbar_Home}>
        <View style={styles.container_bar_Home}>
          <TouchableOpacity>
            <Image source={require('../../assets/calendar.png')} style={styles.button_bar_Home} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/report.png')} style={styles.button_bar_Home} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/home.png')} style={styles.button_bar_Home} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/vaccine.png')} style={styles.button_bar_Home} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/user.png')} style={styles.button_bar_Home} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Estilos
// _____________________________________________________

const styles = StyleSheet.create({
  container_Home: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redback_Home: {
    backgroundColor: '#E91608',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  top_Home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingTop: 10,
  },
  wedoctor_cross_Home: {
    width: 60,
    height: 60,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 20,
  },
  bell_button_Home: {},
  container2_Home: {
    alignItems: 'center',
  },
  title_Home: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 20,
  },
  input_search_Home: {
    backgroundColor: '#EE5C52',
    borderRadius: 20,
    width: '90%',
    height: 40,
    color: 'white',
    fontSize: 15,
    padding: 10,
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 15,
  },

  //  --------------------------- Style 1 -----------------------------  //

  button_container_Home: {
    marginTop: 10,
  },
  title2_Home: {
    color: '#9B0E08',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 15,
  },
  button_list1_Home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button_list2_Home: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button_Home: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  icon_button_Home: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%',
  },
  buttontext_Home: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
  },

    //  --------------------------- Style 2 -----------------------------  //

  bottom_Home: {
    marginTop: 10,
    paddingBottom: 80,
  },
  title3_Home: {
    color: '#9B0E08',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 15,
  },
  container_agendamento_Home: {
    alignItems: 'center',
  },
  agendamento_Home: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '100%',
    padding: 15,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_Home: {},
  atendimento_Home: {
    fontWeight: '900',
    fontSize: 16,
    marginBottom: 5,
  },
  doctor_Home: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  confirmation_Home: {
    color: '#9B0E08',
    fontWeight: 'bold',
    fontSize: 15,
  },
  info2_Home: {
    alignItems: 'flex-end',
    alignItems: 'center',
  },
  time_background_Home: {
    backgroundColor: '#9B0E08',
    borderRadius: 7.5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time_Home: {
    color: '#fff',
    fontWeight: '500',
  },
  change_Home: {
    color: '#9B0E08',
    marginTop: 5,
  },

  //  --------------------------- Style 3 -----------------------------  //

  redbar_Home: {
    backgroundColor: '#E91608',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  container_bar_Home: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button_bar_Home: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
});