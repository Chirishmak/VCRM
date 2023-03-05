// // import React {useState,useEffect} from 'react;
// import auth from "@react-native-firebase/auth";
// import PhoneNumber from "../components/PhoneNumber";
// import VerifyCode from '../components/VerifyCode';
// import Authenticated from "../components/Authenticated";
// import React, { useEffect, useState } from "react";
// import firestore from "@react-native-firebase/firestore"
// import { useNavigation } from '@react-navigation/native';
// // import { BackHandler } from "react-native";
// // import {Alert} from 'react-native';
// // import { useEffect, useState } from "react";

// export default function Login() {
//     const [confirm, setConfirm] = useState(null);
//     const [authenticated, setAuthenticated] = useState(false);
//     const navigation = useNavigation();
//     // const auth = firebase.auth();
//     const CompanyData = []



//     async function signIn(phoneNumber) {
//         try {
//             firestore()
//                 .collection('company_registered')
//                 .get()
//                 .then(querySnapshot => {
//                     console.log('Total Company: ', querySnapshot.size);

//                     querySnapshot.forEach((doc)=>CompanyData.push({...doc.data(),id:doc.id}))
//                         console.log("CompanyData", CompanyData)
//                         // console.log('User ID: ', doc.id, doc.data());
//                         const filtering = CompanyData?.filter((user)=> user.id === phoneNumber)
//                         console.log("Filtering", filtering);
//                         if (filtering[0]?.id === phoneNumber){
//                             console.log("....")
//                             const confirmation =  auth().signInWithPhoneNumber(phoneNumber);
//                             setConfirm(confirmation);
//                         }
//                         else if(filtering[0]?.id !== phoneNumber){
//                             alert("Please get registered!!!")
//                         }
//                     });


//         } catch (error) {
//             alert(error);
//         }
//     }

//     async function confirmVerificationCode(code) {
//         try {
//             await confirm.confirm(code);
//             setConfirm(null);
//         } catch (error) {
//             alert('Invalid code');
//         }
//     }

//     auth().onAuthStateChanged((user) => {
//         if (user) {
//             setAuthenticated(true);
//         } else {
//             setAuthenticated(false);
//         }
//     })

//     if (authenticated) return <Authenticated onSubmit={()=> navigation.navigate("Product_List")} />;

//     if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

//     return <PhoneNumber onSubmit={signIn} />;
// }

import React, { useEffect,useState } from 'react';
import { Button, TextInput,View,StyleSheet,Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native';
import NotificationController from '../NotificationController.android';
import messaging from '@react-native-firebase/messaging';

const Login=()=> {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [code, setCode] = useState('');
    const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    //     // const auth = firebase.auth();
    const CompanyData = []
    const VendorData = []

    // function onAuthStateChanged(user) {
    //     setUser(user);
    //     if (initializing) setInitializing(false);
    //     console.log("user",user)
    //   }

    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber; // unsubscribe on unmount
    //   }, []);

      useEffect(()=>{
        messaging().setBackgroundMessageHandler(async(remoteMessage)=>{
          console.log("Message handled in the background!!",remoteMessage)
        });

        const unsubscribe = messaging().onMessage(async(remoteMessage)=>{
          console.log("remoteMessage",remoteMessage);
        });
        return unsubscribe;
      },[])

      const checkToken = async()=>{
        const fcmToken = await messaging().getToken();
        if (fcmToken){
          console.log("token",fcmToken);
          // Alert.alert(fcmToken);
        }
      }

    // Handle the button press
    async function signIn(phoneNumber) {
        try {
            firestore()
                .collection('Companies')
                .get()
                .then(querySnapshot => {
                    console.log('Total Company: ', querySnapshot.size);

                    querySnapshot.forEach((doc) => CompanyData.push({ ...doc.data(), id: doc.id }))
                    console.log("CompanyData", CompanyData)
                    // console.log('User ID: ', doc.id, doc.data());
                    const filtering = CompanyData?.filter((user) => user.id === phoneNumber)
                    console.log("FilteringC", filtering);
                    if (filtering[0]?.id === phoneNumber) {
                        // console.log("....")
                        const confirmation = auth().signInWithPhoneNumber(phoneNumber);
                        setConfirm(confirmation);
                    }
                    if (filtering[0]?.id !== phoneNumber) {
                      firestore()
                      .collection('vendor_registered')
                      .get()
                      .then(querySnapshot => {
                          console.log('Total Company: ', querySnapshot.size);
      
                          querySnapshot.forEach((doc) => VendorData.push({ ...doc.data(), id: doc.id }))
                          console.log("VendorData", VendorData)
                          // console.log('User ID: ', doc.id, doc.data());
                          const filteringv = VendorData?.filter((user) => user.id === phoneNumber)
                          console.log("FilteringV", filteringv);
                          if(filteringv[0]?.id === phoneNumber){
                          const confirmation = auth().signInWithPhoneNumber(phoneNumber);
                        setConfirm(confirmation)}
                        else if(filteringv[0]?.id !== phoneNumber){
                          alert('Please get registered..')
                        }
                        // console.log('confirm',confirmation);
// if(filtering[0]?.id !== phoneNumber)

                    }
                   
                    )}
                   
                });


        } catch (error) {
            alert(error);
        }
    }

    async function confirmCode() {
        try {
          await confirm.confirm(code);
        } catch (error) {
          console.log('Invalid code.');
        }
      }
      // auth().onAuthStateChanged((user) => {
      //           if (user) {
      //               setAuthenticated(true);
      //           } else {
      //               setAuthenticated(false);
      //           }
      //       })

    if (!confirm) {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
        <TextInput
                autoFocus
                placeholder='Enter Your Registered mobile No'
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="numbers-and-punctuation"
              />
        <Button
          title="Send OTP"
          onPress={() => signIn(phoneNumber)}
        />
        </View>
        );
    }

    
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <TextInput style={styles.input} placeholder='OTP' value={code} onChangeText={setCode} />
            <Button title="Submit OTP" onPress={() => {confirmCode(); checkToken();
            if(phoneNumber=='+919619985663' )
             navigation.navigate("CompanyLanding",phoneNumber)
             else{
             navigation.navigate("VendorLanding",phoneNumber)

             }
             
            
             
            }}
              />
        </View>
    );
    

   
    
}

const styles = StyleSheet.create({
    input: {
      justifyContent:'center',
      alignItems:'center',
            borderWidth: 2,
            borderColor: 'lightblue',
            width: 300,
            marginVertical: 30,
            fontSize: 19,
            // padding: 10,
            borderRadius: 8,
            color:'black'
          },
})

export default Login;