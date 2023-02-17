import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


const VendorLanding = () => {

    const navigation = useNavigation();
    const [product, setProduct] = useState([]);
    let ProductData = []

    const [myData, setMyData] = useState(null);


    // const navigation = useNavigation();
  
  
    const route = useRoute();
    const PhoneNumber = route.params
  
  
    useEffect(() => {
  
      getUserData();
  
    }, []);
  
  
const vname=myData ? myData.firstname : '';
  
  
    const getUserData = async () => {
  
      try {
        const data = await firestore().collection('vendor_registered').doc(PhoneNumber).get();
        console.log(data._data);
        setMyData(data._data)
  
      } catch (error) {
  
  
  
      }
  
    }
    useEffect(() => {
        getData();

    }, []);

    function getData() {
        firestore()
            .collection('Products')
            .get()
            .then(querySnapshot => {
                console.log('Total product: ', querySnapshot.size);


                //   querySnapshot.forEach(documentSnapshot => {
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
            <ScrollView style={{height:'100%',width:'100%'}}>

                <View style={styles.innerconatiner}>
        <Text style={{color:'black',fontSize:20}}>Vendor Landing Page</Text>
    <Text style={{ fontSize: 25, position: 'absolute', top: 15, left: -5,color:'black',margin:10 }}> Hello {myData ? myData.firstname : ''},</Text>

                    {product.map((product) => {
                        const prod=product.product_name;
const vname=myData ? myData.firstname : '';
const vn=[prod,vname]

                        return <View style={styles.addedproduct} key={product.id}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Leads',vn)}>
                            <Text style={styles.pname}>Company Name : {product.company_name}</Text>

                                <Text style={styles.pname}>Product Name : {product.product_name}</Text>
                                <Text style={styles.pdetails}>Product Details : {product.product_details}</Text>
                                <Text style={styles.pquantity}>Product Quantity : {product.product_quantity}</Text>
                            </TouchableOpacity>
                        </View>

                    })
                    }
                </View>
            </ScrollView>
            <View style={{position:'absolute',right:10,bottom:20,backgroundColor:'black',height:'7%',width:'35%',justifyContent:'center',alignItems:'center',borderRadius:20}}>
            <TouchableOpacity style={styles.adding}>
                <Text onPress={() => navigation.navigate("MyLeads",vname)}>My Leads</Text>
                {/* <Text style={styles.padd} onPress={() => navigation.navigate("Add_Product")}>Add_Product</Text> */}

            </TouchableOpacity>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        // height: "100%",
        alignItems: 'center',
        backgroundColor:'#fff',
        flex: 3,
        // position:'absolute',
        width: "100%"
    },
    innerconatiner: {
        alignItems: 'center',
        width:'100%'
    },
    addedproduct: {
        margin: 25,
        padding: 5,
        borderRadius: 10,
        width:'90%',
        height: '16%',
        borderColor: '#000',
        borderWidth:1,
        // flexDirection: 'row',
        // shadowColor: '#B6B6B6',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.6,
        // elevation: 3,
        // justifyContent: 'space-between'
    },
    pname: {
        color: 'red',
        fontSize: 15,
        paddingBottom: 5,
        fontWeight:'bold'
    },
    pdetails: {
        color: '#000',
        fontSize: 12
    },
    pquantity:{
        color: '#000',
        fontSize: 15
    },
   
  
})

export default VendorLanding;