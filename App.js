import { View, Text, StyleSheet } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
    <View style={styles.bemvindo}>
      <Text>Bem Vindo, Usuário</Text>
    </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{

  backgroundColor: "#D5C7C7",
},

  bemvindo:{

  marginTop: 200,
  marginLeft: 125,
 }
})