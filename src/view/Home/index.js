import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import heart from "./src/assets/Heart.png";

function Home(){

const [search, setSearch] = ('');

return(

<View style={styles.container_Home}>

    <View style={styles.redback_Home}>

    {/* <Image
       source={cross}
    /> */}
        
    <View style={styles.container2_Home}>

        <Text style={styles.title_Home}>Bem-vindo, Username!</Text>

        <TextInput
            style={styles.input_search_Home}
            value={search}
            onChangeText={setSearch}
            placeholder=""
        />
        


    </View>
    </View>

        <View style={styles.button_container_Home}>

            <Text style={styles.title2_Home}>Atendimentos</Text>

            <View style={styles.button_list1_Home}>
        

                <TouchableOpacity style={styles.button_Home}>
                    <Image source={heart}></Image>
                    <Text style={styles.buttontext_Home}>Cardiologista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                    <Text style={styles.buttontext_Home}>Oftalmologista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                    <Text style={styles.buttontext_Home}>Clinico Geral</Text>
                </TouchableOpacity>

            </View>
        
            <View style={styles.button_list2_Home}>

                <TouchableOpacity style={styles.button_Home}>
                    <Text style={styles.buttontext_Home}>Ortopedista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                    <Text style={styles.buttontext_Home}>Odontologia</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                    <Text style={styles.buttontext_Home}>Gastroenterologista</Text>
                </TouchableOpacity>



            </View>

        </View>

</View>

)}

const styles = StyleSheet.create({

    container_Home:{
  
        flex:1,   
        backgroundColor: "#fff",   
    },

    redback_Home:{

        backgroundColor: "#E91608",
        borderRadius: 10,
        height: 400,

        justifyContent: 'center',
        

    },

    container2_Home:{
        
        alignItems: 'center',
        marginBottom: 50,

    },

    title_Home:{

        color: "#fff",
        fontSize: 25,
        fontWeight: '500',
        

    },

    input_search_Home:{

        backgroundColor: "#E4D3D3",
        opacity: 0.4,
        borderRadius: 20,
        marginTop: 35,
        marginHorizontal: 27,
    
        width: 330,
        height: 40,
    
        color: 'white',
        fontSize: 13,
        padding: 10,
    
      },

//  --------------------------- Style 1 -----------------------------  //


      button_container_Home:{

        position: 'absolute',
        marginTop: 270,
  
    },

      button_list1_Home:{
        
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
        
        

    },

      button_list2_Home:{
        
        flexDirection: 'row',
        marginHorizontal: 10 

    },

      title2_Home:{

        color: "#fff",
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 15 ,

      },

      button_Home:{

        backgroundColor: "#fff",
        borderRadius: 20,
        width: 111,
        height: 128,

        maringVertical: 10 ,
        marginHorizontal: 5 ,
        alignItems: 'center',
        justifyContent: 'center',
        

        shadowColor: 'black', // Cor da sombra
        shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 1, // Opacidade da sombra
        shadowRadius: 5, // Raio de desfoque da sombra
        elevation: 10, // Elevação (para Android)

      },

      buttontext_Home:{

      },

})

export default Home;