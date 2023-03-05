
import React, { Component, useEffect, useState } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Alert, ScrollView } from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import auth from '@react-native-firebase/auth';
import { useNavigation,useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
// import {firebase} from "../config";


const Register = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [company, setCompany] = useState(CData);
    const mobile_number = `+91${phonenumber}`
    const navigation = useNavigation();
    const CData = []
    const route = useRoute();
    const compn = route.params
    const Comp_n=compn;

    console.log("comp_n",Comp_n);

    useEffect(()=>{
        // getCdata();
    },[])
    

    // const getCdata = firestore().
    // collection("Companies")
    // .get()
    // .then(querySnapshot => {
    //     console.log('Total Company: ', querySnapshot.size);

    //     querySnapshot.forEach((doc) => CData.push({ ...doc.data(), id: doc.id }))
    //     console.log("CompanyData", CData)
    //     setCompany(CData)
    //             // console.log('User ID: ', doc.id, doc.data());
    //     // const filtering = CompanyData?.filter((user) => user.id === phoneNumber)
    //     // console.log("FilteringC", filtering);
    // }
    // )


    const registerUSer = async (email, password) => {
        await auth().createUserWithEmailAndPassword(email, password, firstname, lastname, phonenumber,company)
            .then(() => {
                auth().currentUser.sendEmailVerification({
                    // auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://vcrm-15e56.firebaseapp.com'

                })
                    .then(() => {
                       alert("Verification sent successfully")
                
                    
                    })
                    .catch((error) => {
                        alert(error.message)
                    })
                    .then(() => {
                       
                        firestore().collection('vendor_registered')
                            .doc(mobile_number)
                            .set({
                                firstname,
                                lastname,
                                email,
                                mobile_number,
                                Comp_n,


                            })
                            .catch((error) => {
                                alert(error.message)
                            })
                    })
                    .catch((error) => {
                        alert(error.message)
                    })

                    console.log("Registered!!")
                
            })
    }




    return (

        <View style={styles.container}>
            {/* <ScrollView> */}
            <Text style={styles.txt}>Enter your details below</Text>
            <TextInput
                style={styles.firstname}
                placeholder="Enter your firstname"
                value={firstname}
                onChangeText={setFirstname}
                autoCorrect={false}
            />
            <TextInput
                style={styles.lastname}
                placeholder="Enter your lastname"
                value={lastname}
                onChangeText={setLastname}
                autoCorrect={false}
            />
            <TextInput
                style={styles.phone_no}
                placeholder="Enter your phone_number "
                value={phonenumber}
                onChangeText={setPhonenumber}
                autoCorrect={false}
                keyboardType="phone-pad"
            // secureTextEntry={true}
            />
            <TextInput
                style={styles.email}
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
            />
            {/* <TextInput
                style={styles.pass}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                secureTextEntry={true}
            /> */}
            <TouchableOpacity style={styles.regsbtn} onPress={() => { registerUSer(email,  firstname, lastname, phonenumber); navigation.navigate("CompanyLanding") }}>
                <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
            {/* </ScrollView> */}
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 30

    },
    txt: {
        // bottom:70,
        fontSize: 30,
        color: "#000"
    },
    firstname: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#FFFADA',
        borderRadius: 10
    },
    lastname: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#FFFADA',
        borderRadius: 10
    },
    phone_no: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#FFFADA',
        borderRadius: 10
    },
    email: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#FFFADA',
        borderRadius: 10
    },
    pass: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#FFFADA',
        borderRadius: 10
    },
    regsbtn: {
        width: 200,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: 'cyan',
        borderRadius: 10

    },
    register: {
        color: "red",
        fontWeight: "bold",
        paddingHorizontal: 50,
        paddingVertical: 10,
        fontSize: 25
    }
});

export default Register;
