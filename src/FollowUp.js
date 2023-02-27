import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text,Button } from 'react-native'
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';


const FollowUp = () => {
    const navigation = useNavigation();
    const [product_price, setProduct_price] = useState('');
    const [product_attachments, setProduct_attachments] = useState('');
    const [comment_box, setComment_box] = useState('');
    const [file,setFile] = useState('');


    // const add = () => {
    //     firestore().
    //     collection("FollowUp").
    //     doc().
    //     set({
    //         product_price,
    //         product_attachments,
    //         comment_box
    //     })
    // }

    const pickfile = async() => {
        try {
           const response = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            });
            console.log("response",response);
            setFile(response);
        }
        catch (e) {
            console.log(e)
        }
    }

    const uploadfile = async() => {
        try {
            const response = await storage().ref(`/Product_Attachment/${file.name}`).putFile(file.uri);
            console.log("...res",response)
            
        } catch (error) {
            console.log(error)
            
        }
    }
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.amt}
                    placeholder='Product Price'
                    value={product_price}
                    onChangeText={setProduct_price}
                    keyboardType='numeric'
                />
                <View style={styles.attach}>
                    {
                        file ? (
                            <Text>{file.uri}</Text>
                        ):(
                            <Text></Text>
                        )
                    }
                <Button onPress={()=> pickfile()}
                    
                    title='Product Attachment'
                />
                </View>
                <TextInput
                    style={styles.comment}
                    placeholder='Comment Box'
                    value={comment_box}
                    onChangeText={setComment_box}
                    maxLength={60} />
                <TouchableOpacity onPress={() => {navigation.navigate("CompanyLanding"); uploadfile();}}>
                    <Text style={styles.save}>Save</Text>
                </TouchableOpacity>
            </View>
        )

    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 10,
            left: 30
        },
        amt: {
            width: 290,
            height: 50,
            top: 30,
            fontSize: 20,
            marginBottom: 10,
            backgroundColor: '#FFFADA',
            borderRadius: 10,
            color:"#000"
        },
        attach: {
            width: 290,
            height: 50,
            top: 40,
            
            marginBottom: 10,
            // backgroundColor: '#FFFADA',
            borderRadius: 10
            
        },
        comment: {
            width: 290,
            height: 50,
            top: 30,
            fontSize: 20,
            marginBottom: 10,
            backgroundColor: '#FFFADA',
            borderRadius: 10
        },
        save: {
            width: 100,
            height: 50,
            top: 40,
            paddingHorizontal: 20,
            paddingVertical: 5,
            fontSize: 30,
            marginBottom: 10,
            backgroundColor: '#000',
            color: "#fff",
            borderRadius: 20
        }
    })


    export default FollowUp;