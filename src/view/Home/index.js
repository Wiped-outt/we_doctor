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
                style={styles.wedoctor_cross_Home}/>

            <TouchableOpacity style={styles.bell_button_Home}>
                <Image
                    source={require('../../assets/bell.png')}/>
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

    <View style={styles.bottom_Home}>

        <Text   Text style={styles.title3_Home}>Seus agendamentos</Text>

        <View style={styles.container_agendamento_Home}>

            <View style={styles.agendamento_Home}>

                <View  iew style={styles.row}>

                    <View  iew style={styles.info_Home}>

                        <Text style={styles.atendimento_Home}>Cardiologista</Text>

                        <Text style={styles.doctor_Home}>Dr. Romeu Lima Souza</Text>

                        <Text style={styles.confirmation_Home}>AGENDADO</Text>
                    
                    </View>

                    <View  iew style={styles.info2_Home}>

                        <View  iew style={styles.time_background_Home}>

                            <Text style={styles.time_Home}>00/00</Text>
                        
                        </View>

                        <View  iew style={styles.time_background_Home}>

                            <Text style={styles.time_Home}>00:00</Text>

                        </View>

                        <TouchableOpacity>
                        <Text style={styles.change_Home}>Mudar</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
            
        </View>

    </View>

{/* ------------------------- Divisão 3 --------------------------- */}


    <View style={styles.redbar_Home}>

        <View style={styles.container_bar_Home}>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/calendar.png')}
                    style={styles.button_bar_Home}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/report.png')}
                    style={styles.button_bar_Home}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/home.png')}
                    style={styles.button_bar_Home}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/vaccine.png')}
                    style={styles.button_bar_Home}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.button_bar_Home}/>
            </TouchableOpacity>

        </View>

    </View>


</View>

)}

const styles = StyleSheet.create({

    container_Home:{
  
        flex:1,   
        backgroundColor: "#fff",   
        marginLeft: 0.5,
    },

    redback_Home:{

        backgroundColor: "#E91608",
        borderRadius: 10,
        height: 380,

        justifyContent: 'center',
        

    },

    top_Home:{

        flexDirection: 'row',

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


    bell_button_Home:{

        marginTop: 20,
        marginLeft: 250,

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

        backgroundColor: "#EE5C52",
        borderRadius: 20,
        marginTop: 35,
        marginHorizontal: 32,
        
    
        width: 330,
        height: 40,
    
        color: 'white',
        fontSize: 15,
        padding: 10,
        
        fontWeight: '500',

        
    
    },

//  --------------------------- Style 1 -----------------------------  //


      button_container_Home:{

        position: 'absolute',
        marginHorizontal: 15,
        marginTop: 250,
  
    },
    
    title2_Home:{

        color: "#fff",
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 10,
        marginBottom: 15 ,

    },

    button_list1_Home:{
        
        flexDirection: 'row',
        marginBottom: 10,
        
        

    },

    button_list2_Home:{
        
        flexDirection: 'row',

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

//  --------------------------- Style 2 -----------------------------  //

    bottom_Home:{

        position: 'absolute',
        marginTop: 570,

    },

    title3_Home:{

        color: "#9B0E08",
        fontSize: 25,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 7 ,

    },
    container_agendamento_Home:{

        alignItems: 'center',
        justifyContent: 'center',
        
        marginLeft: 16,
    },

    agendamento_Home:{
        

        backgroundColor: '#fff',
        borderRadius: 20,
        width: 360,
        height: 95,

        maringVertical: 10 ,
        marginHorizontal: 1,
        // alignItems: 'center',
        justifyContent: 'center',

        shadowColor: 'black', // Cor da sombra
        shadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 1, // Opacidade da sombra
        shadowRadius: 5, // Raio de desfoque da sombra
        elevation: 10, // Elevação (para Android)

    },

    row:{

        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    
    info_Home:{

        marginTop: 10,
        marginLeft: 25,

    },

    atendimento_Home:{

        fontWeight: '900',

    },

    doctor_Home:{
        
        fontSize: 10,
        fontWeight: '600',
        
    },

    confirmation_Home:{

        color: '#9B0E08',
        fontWeight: 'bold',
        fontSize: 15,
        
        marginTop: 7.5,
        // marginLeft: 5,

    },

    info2_Home:{
        
        alignItems: 'center',
        marginTop: 5,
        marginRight: 15,

    },

    time_background_Home:{
        
        backgroundColor: '#9B0E08',
        borderRadius: 7.5,
        width: 100,
        height: 22.5,

        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 2.1,

    },

    time_Home:{


        alignItems: 'center',
        justifyContent: 'center',

        color: '#fff',
        fontWeight: '500',

    },

    change_Home:{

        color: '#9B0E08',
        // fontSize: 15,

        marginTop: 1,

    },

//  --------------------------- Style 3 -----------------------------  //

    redbar_Home:{

        backgroundColor: "#E91608",
        borderRadius: 15,
        height: 55,
        width: 375,

        marginTop: 337.5,
        marginLeft: 9.5,

        justifyContent: 'center',
        
    },

    container_bar_Home:{

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },

    button_bar_Home:{

        resizeMode: 'contain',
        // alignItems: 'center',
        // justifyContent: 'center',
        
    },



})

export default Home;