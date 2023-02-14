// import React,{useEffect}from 'react';
// import { StyleSheet, Text, View,BackHandler,Alert } from 'react-native';
// // import firebase from 'firebase/compat/app';
// import auth from '@react-native-firebase/auth';
// // import "firebase/compat/auth";

// export default function Authenticated() {

//     // const auth = firebase.auth();

//     useEffect(() => {
//       const backAction = () => {
//         Alert.alert("Hold on!", "Are you sure you want to Sign-out?", [
//           {
//             text: "No",
//             onPress: () => BackHandler.exitApp(),
//             style: "cancel"
//           },
//           { text: "YES", onPress: () => auth().signOut() }
//         ]);
//         return true;
//       };
  
//       const backHandler = BackHandler.addEventListener(
//         "hardwareBackPress",
//         backAction
//       );
  
//       return () => backHandler.remove();
//     }, []);

//   // return (
//   //   <View style={styles.screen}>
//   //     <Text style={styles.text}>You're Logged in</Text>
//   //     <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
//   //     {/* <View style={{ marginTop: 30 }}>
//   //       <Button title="Signout" onPress={() => auth().signOut()} />
//   //     </View> */}
//   //   </View>
//   // );
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
//     fontSize: 25,
//   },
//   phoneNumber: {
//     fontSize: 21,
//     marginTop: 20,
//   },
// });
