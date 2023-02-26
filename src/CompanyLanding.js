import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Entypo';


const CompanyLanding = () => {

    const navigation = useNavigation();
    const [product, setProduct] = useState([]);
    let ProductData = []
    let CustomerData = []
    const [myData, setMyData] = useState(null);


    // const navigation = useNavigation();


    const route = useRoute();
    const PhoneNumber = route.params


    useEffect(() => {

        getUserData();

    }, []);




    const getUserData = async () => {

        try {
            const data = await firestore().collection('Companies').doc(PhoneNumber).get();
            console.log(data._data);
            setMyData(data._data)

        } catch (error) {



        }

    }
    useEffect(() => {
        getData();

    }, []);


    useEffect(() => {
        getData();

    }, []);

    function getData() {
        firestore()
            .collection('Products')
            .get()
            .then(querySnapshot => {
                console.log('Total product: ', querySnapshot.size);


                //    querySnapshot.forEach(documentSnapshot => {
                //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                //   });
                querySnapshot.forEach((doc) => ProductData.push({ ...doc.data(), id: doc.id }))
                console.log("ProductData", ProductData)
                setProduct(ProductData)

            });
        return
    }


    console.log("....", product)

    

    return (
        <View style={styles.container}>
            <Text style={{ color: 'black', fontSize: 20 }}>Company Landing Page</Text>

            <Text style={{ fontSize: 25, position: 'absolute', top: 15, left: -5, color: 'black', margin: 10 }}> Hello {myData ? myData.Company_name : ''},</Text>

            <ScrollView style={{ width: '100%' }}>
                <View style={styles.innerconatiner}>
                    {product.map((product) => {
                        const prod=product.product_name;
                        const vn = [prod]
                        return <View style={styles.addedproduct} key={product.id}>
                            <View>
                                <Text style={styles.pname}>Product_Name : {product.product_name}</Text>
                                <Text style={styles.pdetails}>Product_Details : {product.product_details}</Text>
                                <Text style={styles.pquantity}>Product_Quantity : {product.product_quantity}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate("LeadList",vn)}>
                                <Icon name="bell" size={25} color="grey" />
                            </TouchableOpacity>
                        </View>

                    })
                    }
                </View>
            </ScrollView>
            <View style={styles.register}>

                <TouchableOpacity >
                    <Text style={{ color: 'black', fontSize: 18 }} onPress={() => navigation.navigate("Register")}>Add Vendor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.padd} >
                <TouchableOpacity>

                    <Text style={{ fontSize: 30 }} onPress={() => navigation.navigate("Add_Product")}>+</Text>
                </TouchableOpacity>

            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#fff'
        // flex: 1,
        // position:'absolute',
        // width: "100%"
    },
    innerconatiner: {
        marginTop: 40,
        alignItems: 'center'
    },
    addedproduct: {
        margin: 15,
        padding: 10,
        borderRadius: 10,
        width: '90%',

        // height: 90,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        // shadowColor: '#B6B6B6',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.6,
        // elevation: 3,
        justifyContent: 'space-between'
    },
    pname: {
        color: 'red',
        fontSize: 20,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    pdetails: {
        color: '#000',
        fontSize: 18
    },
    pquantity: {
        color: '#000',
        fontSize: 20
    },

    register: {
        position: 'absolute',
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        // fontWeight:'bold',
        fontSize: 18,
        height: 40,
        width: 120,
        color: "#000",
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15

    },
    padd: {
        position: 'absolute',

        right: 10,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#000",
        // borderWidth: 1,
        // fontWeight:'bold',

        height: 60,
        width: 60,

        color: "#fff",
        // bottom: 0
    }
})

export default CompanyLanding;