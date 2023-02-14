// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import auth, { firebase } from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';
// import {signIn} from '../src/Login';


// export default function PhoneNumber(props) {
//   const navigation = useNavigation();
//   const [phoneNumber, setPhoneNumber] = useState(null);


  

//   return (
//     <View style={styles.screen}>
//       <Text style={styles.text}>Enter Phone Number</Text>
//       <TextInput
//         autoFocus
//         style={styles.input}
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="numbers-and-punctuation"
//       />
//       <Text style={styles.signin} onPress={() => props.signIn(phoneNumber)} >Sign_In</Text>
//       {/* <TouchableOpacity style={{width:"100%"}} onPress={()=>navigation.navigate('Register')}>
//       <Text  style={{top:0}}>Don't have an account ! Register Here</Text>
//       <Text>Register!!</Text>  */}
//       {/* </TouchableOpacity> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: 'lightblue',
//     width: 300,
//     marginVertical: 30,
//     fontSize: 25,
//     padding: 10,
//     borderRadius: 8,
//   },
//   text: {
//     top: 10,
//     fontSize: 25,
//   },
//   signin:{
//     borderWidth: 2,
//     borderColor: 'lightblue',
//     backgroundColor:'lightblue',
//     width: 100,
//     marginVertical: 30,
//     fontSize: 25,
//     padding: 10,
//     borderRadius: 8,
//   }
// });
