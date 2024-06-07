import react from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

// import { Container } from "./styles";

const Input = () => {
    return (
        <View style={StyleSheet.container}>

            <TextInput style={styles.input} 
            underlineColorAndroid="transparent"
            placeholderTextColor={'white'}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input:{
        backgroundColor: "#9B0E08",
        borderRadius: 5,
  
        width: 355,
        height: 32,
  
        color: 'white',
        fontSize: 13,
        padding: 5,
        
  
    },
});
export default Input;
