// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// function InputPage() {
//   const [inputValue, setInputValue] = useState('');
//   const navigation = useNavigation();

//   const handleInputChange = (text) => {
//     setInputValue(text);
//   };

//   const handleNavigate = () => {
//     navigation.navigate('OtherPage', { inputValue });
//   };

//   return (
//     <View>
//       <TextInput
//         style={styles.input_login}
//         onChangeText={handleInputChange}
//         value={inputValue}
//       />
//       <Button title="Enviar" onPress={handleNavigate} />
//     </View>
//   );
// }

// export default InputPage;

// --------------------------------------------------------------------

// import React from 'react';
// import { View, Text } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// function OtherPage() {
//   const route = useRoute();
//   const inputValue = route.params?.inputValue || '';

//   return (
//     <View>
//       <Text>O valor digitado foi: {inputValue}</Text>
//     </View>
//   );
// }

// export default OtherPage;
