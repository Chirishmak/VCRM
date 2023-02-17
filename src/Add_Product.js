import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
// import getData from './Product_List'

const Add_Product = (props) => {

    const navigation = useNavigation();
    const [company_name, setCompany_name] = useState();

    const [product_name, setProduct_name] = useState();

    const [product_details, setProduct_details] = useState();
    const [product_quantity,setProduct_quantity] = useState();
    


    const addproduct=()=>{
        firestore().collection("Products")
        .doc(product_name)
        .set({
            company_name,
            product_name,
            product_details,
            product_quantity
        })
        console.log("added")
    }

    

   

    return (
        <View style={styles.container}>
            <Text style={styles.add}>Add Products</Text>
            <TextInput style={styles.name}
                value={company_name}
                placeholder='Enter Your Company Name'
                onChangeText={setCompany_name}
                autoCapitalize='false'
            ></TextInput>
            <TextInput style={styles.name}
                value={product_name}
                placeholder='Enter product name'
                onChangeText={setProduct_name}
                autoCapitalize='false'
            >
            </TextInput>
            <TextInput style={styles.details}
                value={product_details}
                placeholder='Enter product details'
                onChangeText={setProduct_details}
                autoCapitalize='false'
                numberOfLines={6}
                // maxLength={100}
            >
            </TextInput>
            <TextInput style={styles.quantity}
                value={product_quantity}
                placeholder='Enter no. of quantity'
                onChangeText={setProduct_quantity}
                keyboardType='number-pad'
                // maxLength={100}
            >
            </TextInput>
            <TouchableOpacity style={{width:"50%",justifyContent:'center',alignItems:'center'}} onPress={()=>{addproduct();navigation.navigate("CompanyLanding",product_name,product_details);}}>
            <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',

    },
    add: {
     
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    name: {
        width:'90%',
        height:50,
        fontSize:20,
       
       
        marginBottom:10,
        backgroundColor:'#808080',
        // borderRadius:20
    },
    details: {
        width:'90%',

        height:100,
        fontSize:20,
       
        marginBottom:10,
        backgroundColor:'#808080',
        paddingEnd:50
        // borderRadius:20,
        
    },
    quantity:{
        width:'90%',

        height:100,
        fontSize:20,
     
        marginBottom:10,
        backgroundColor:'#808080',
    },
    save: {
        borderRadius: 10,
        width:'100%',
        color:'#000',
        fontWeight:'bold',
        
        backgroundColor: 'cyan',
      
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 30
    }
})

export default Add_Product;