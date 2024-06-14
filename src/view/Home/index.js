import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
// import heart from "./src/assets/Heart.png";

function Home(){

const [search, setSearch] = ('');

return(

<View style={styles.container_Home}>

    <View style={styles.redback_Home}>
        
    <View style={styles.top_Home}>

    <Image
        source={require('../../assets/wedoctor_cross.png')}
        style={styles.wedoctor_cross_Home}
      />

<TouchableOpacity style={styles.bell_button_Home}>
                    <Image
                    source={require('../../assets/bell.png')}
                    style={styles.bell_image_Home}/>
                </TouchableOpacity>

      </View>
        
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

{/* ------------------------- Divisão 1 --------------------------- */}

        <View style={styles.button_container_Home}>

            <Text style={styles.title2_Home}>Atendimentos</Text>

            <View style={styles.button_list1_Home}>
        

                <TouchableOpacity style={styles.button_Home}>
                    <Image
                    source={require('../../assets/heart.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Cardiologista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                <Image
                    source={require('../../assets/eye.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Oftalmologista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                <Image
                    source={require('../../assets/medic.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Clinico Geral</Text>
                </TouchableOpacity>

            </View>
        
            <View style={styles.button_list2_Home}>

                <TouchableOpacity style={styles.button_Home}>
                <Image
                    source={require('../../assets/bones.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Ortopedista</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                <Image
                    source={require('../../assets/tooth.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Odontologia</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button_Home}>
                <Image
                    source={require('../../assets/stomach.png')}
                    style={styles.icon_button_Home}/>
                    <Text style={styles.buttontext_Home}>Gastroenterologista</Text>
                </TouchableOpacity>



            </View>

        </View>

{/* ------------------------- Divisão 2 --------------------------- */}





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
    
    wedoctor_cross_Home:{

        width: 60,
        height: 60,
    
        borderRadius: 5,
    
        
        marginLeft: 20,

        boxShadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 6,
                height: 6,
            },
        },
        shadowOpacity: 1, // Opacidade da sombra (1 é totalmente opaco)
        shadowRadius: 4, // Raio da sombra (maior valor para maior difusão)
        elevation: 20, // Elevação para Android (maior valor para sombra mais intensa)
        
      },

    top_Home:{

        flexDirection: 'row',

      },

    bell_button_Home:{

        marginTop: 20,
        marginLeft: 250,

      },

    bell_image_Home:{

      },

      
    container2_Home:{
        
        
        alignItems: 'center',
        marginBottom: 130,
        marginTop: 20,

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
        marginHorizontal: 31,
    
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

      icon_button_Home:{

        resizeMode: 'contain',
        width: '50%',
        height: '50%',

    },

      buttontext_Home:{

      },

      buttontext2_Home:{

            fontSize: '10%',

      },

})

export default Home;