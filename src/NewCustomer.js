import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import NotificationController from '../NotificationController.android';



const NewCustomer = () => {
    const route = useRoute();
    const vn = route.params
    // const route1 = useRoute();
    const prod=vn?vn[0]:' ';
    const vendor=vn?vn[1]:' ';

    

    // const vname=route1.params
    const [name, setName] = useState("");
    // const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState(prod);
    const [phonenumber, setPhonenumber] = useState("");
    const [anumber, setAnumber] = useState("");
    const [address, setAddress] = useState("");

    const mobile_number = `+91${phonenumber}`
    const navigation = useNavigation();

    // const vendor=vname
   

    const AddCustomer = 
    // async 
    (email, password) => {
        // await auth().createUserWithEmailAndPassword(email, product, name, phonenumber,anumber)
        //     .then(() => {
        //         auth().currentUser.sendEmailVerification({
        //             // auth().currentUser.sendEmailVerification({
        //             handleCodeInApp: true,
        //             url: 'https://vcrm-15e56.firebaseapp.com'

        //         })
        //             .then(() => {
        //                alert("Verification sent successfully")
                
                    
        //             })
        //             .catch((error) => {
        //                 alert(error.message)
        //             })
                    // .then(() => {
                       
                        firestore().collection('Customers')
                            .doc(mobile_number)
                            .set({
                                name,
                                email,
                                mobile_number,
                                anumber,
                                address,
                                product,
                                vendor

                            })
                            .catch((error) => {
                                alert(error.message)
                            })
                    // })
                    .catch((error) => {
                        alert(error.message)
                    })

                    console.log("Registered!!")
                
            // })
    }




    return (

        <View style={styles.container}>
            {/* <ScrollView> */}
            <Text style={styles.txt}>Customers Details</Text>
            <TextInput
                style={styles.firstname}
                // placeholder="Enter your firstname"
                value={product}
                onChangeText={setProduct}
                autoCorrect={false}
            />
            <TextInput
                style={styles.firstname}
                placeholder="Enter your firstname"
                value={name}
                onChangeText={setName}
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
                style={styles.lastname}
                placeholder="Enter your Alt No"
                value={anumber}
                onChangeText={setAnumber}
                autoCorrect={false}
            />
            <TextInput
                style={styles.email}
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                autoCorrect={false}
            />
            <TextInput
                style={styles.pass}
                placeholder="Enter your Address"
                value={address}
                onChangeText={setAddress}
                autoCorrect={false}
                // secureTextEntry={true}
            />
            <TouchableOpacity style={styles.regsbtn} onPress={() => { AddCustomer(email,name, phonenumber,anumber,product,address,vendor);  NotificationController; navigation.navigate("VendorLanding");  }}>
            {/* <TouchableOpacity style={styles.regsbtn} onPress={() => { NotificationController();   }}> */}

                <Text style={styles.register}>Submit</Text>
            </TouchableOpacity>
            </View>
)}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
       
        color:'black',
        

    },
    txt: {
        // bottom:70,
        fontSize: 30,
        color: "#000",
        color:'black'

    },
    firstname: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#FFFADA',
        borderRadius: 10,
        color:'black'

    },
    lastname: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#FFFADA',
        borderRadius: 10,
        color:'black'

    },
    phone_no: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#FFFADA',
        borderRadius: 10,
        color:'black'

    },
    email: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#FFFADA',
        borderRadius: 10,
        color:'black'

    },
    pass: {
        width: 290,
        height: 50,
        top: 30,
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#FFFADA',
        borderRadius: 10,
        color:'black'

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


export default NewCustomer;