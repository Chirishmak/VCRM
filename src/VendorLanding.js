import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,BackHandler,Alert} from 'react-native';
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
  
      getVendorData();
  
    }, []);
  
  
  
  
    const getVendorData = async () => {
  
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

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to Sign-out?", [
            {
              text: "No",
              onPress: () => BackHandler.exitApp(),
              style: "cancel"
            },
            { text: "YES", onPress: () => auth().signOut() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
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
            <ScrollView>

                <View style={styles.innerconatiner}>
        <Text style={{color:'black',fontSize:20}}>Vendor Landing Page</Text>
    <Text style={{ fontSize: 25, position: 'absolute', top: 15, left: -5,color:'black',margin:10 }}> Hello {myData ? myData.firstname : ''},</Text>


                    {product.map((product) => {
                        return <View style={styles.addedproduct} key={product.id}>
                            <TouchableOpacity >
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
            {/* <TouchableOpacity style={styles.adding}>
                <Text style={styles.register} onPress={() => navigation.navigate("Register")}>Vendor_Register</Text>
                <Text style={styles.padd} onPress={() => navigation.navigate("Add_Product")}>Add_Product</Text>

            </TouchableOpacity> */}
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: 'center',
        backgroundColor:'#fff'
        // flex: 1,
        // position:'absolute',
        // width: "100%"
    },
    innerconatiner: {
        alignItems: 'center'
    },
    addedproduct: {
        margin: 25,
        padding: 10,
        borderRadius: 10,
        width:'95%',
        // height: 90,
        borderColor: '#000',
        borderWidth:1,
        // flexDirection: 'row',
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
        fontWeight:'bold'
    },
    pdetails: {
        color: '#000',
        fontSize: 18
    },
    pquantity:{
        color: '#000',
        fontSize: 20
    },
    adding: {
        flexDirection: 'row',
        bottom: 20
    },
    register: {
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        
        // fontWeight:'bold',
        fontSize: 18,
        height: 40,
        width: "38%",
        paddingHorizontal: 10,
        paddingVertical: 6,
        color: "#000",
        right: 40,
        // bottom: 0

    },
    padd: {
        borderRadius: 5,
        backgroundColor: "#000",
        // borderWidth: 1,
        // fontWeight:'bold',
        fontSize: 20,
        height: 40,
        width: "35%",
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: "#fff",
        left: 40,
        // bottom: 0
    }
})

export default VendorLanding;