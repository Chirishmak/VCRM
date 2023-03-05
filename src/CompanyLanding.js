// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
// import Icon from 'react-native-vector-icons/Entypo';


// const CompanyLanding = () => {

//     const navigation = useNavigation();
//     const [product, setProduct] = useState([]);
//     let ProductData = []
//     let CustomerData = []
//     const [myData, setMyData] = useState([]);
//     const [customer, setCustomer] = useState([]);
//     const compname = myData ? myData.Company_name : '';
//     const compn = compname;

//     console.log("...",compn)
//     console.log("mydata",myData);




//     // const navigation = useNavigation();


//     // const route = useRoute();
//     // const PhoneNumber = route.params
//     // const vn = route.params
//     // const vn=route.params
//     // const prod = vn[0] ? vn[0] : ''
//     // cons

//     // console.log("cm",cm)


//     // useEffect(() => {

//     //     getUserData();
//     //     // getData();
//     //     // getcustomerdata();

//     // }, []);




//     // const getUserData = async () => {

//     //     try {
//     //         const data = await firestore().collection('Companies').doc(PhoneNumber).get();
//     //         console.log(data._data);
//     //         setMyData(data._data)
//     //         console.log("data1",data._data)

//     //     } catch (error) {



//     //     }

//     // }

//     useEffect(() => {

//         getUserData();

//     }, []);




//     const getUserData = async () => {

//         try {
//             const data = await firestore().collection('Companies').doc(PhoneNumber).get();
//             console.log(data._data);
//             setMyData(data._data)

//         } catch (error) {



//         }

//     }

//     useEffect(()=>{
//         getData();
//     },[])

//     function getData() {
//         firestore()
//             .collection('Products')
//             .get()
//             .then(querySnapshot => {
//                 console.log('Total product: ', querySnapshot.size);
//                 querySnapshot.forEach((doc) => ProductData.push({ ...doc.data(), id: doc.id }))
//                 console.log("ProductData", ProductData)
//                 setProduct(ProductData)

//             });
//         return
//     }

//     useEffect(()=>{
//         getcustomerdata();
//     },[])

//     function getcustomerdata() {
//         firestore().
//             collection('Customers').
//             get()
//             .then(querySnapshot => {
//                 console.log('Total Customer: ', querySnapshot.size);
//                 querySnapshot.forEach((doc) => CustomerData.push({ ...doc.data(), id: doc.id }))
//                 console.log("CustomerData1", CustomerData);
//                 const filtering = CustomerData?.filter((user) => user.product === "camera")
//                 console.log("Filteringgg", filtering);
//                 setCustomer(filtering)

//             });
//         return
//     }

//     const length = customer.length;


//     console.log("....", product)
//     console.log("cust", customer)

//     // console.log("Length1",length)



//     return (
//         <View style={styles.container}>
//             <ScrollView style={{ width: '100%' }}>
//                 <View style={{ flexDirection: 'row',top:30 }}>
//                     <TouchableOpacity>
//                         <Text style={{borderColor:"#000",borderWidth:1,color:"#000",borderRadius:10,fontSize:20,left:20,top:5,width:"110%",paddingHorizontal:8,fontWeight:'bold'}}>Vendor_List</Text>
//                     </TouchableOpacity>
//                     {/* <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center' }}>Company Landing Page</Text> */}

//                     <Text style={{ fontSize: 25, color: 'black' ,left:30}}> Hello {myData ? myData.Company_name : ''},</Text>

//                 </View>
//                 <View style={styles.innerconatiner}>
//                     {product.map((product) => {
//                         const prod = product.product_name;
//                         const vn = [prod]
//                         return <View style={styles.addedproduct} key={product.id}>
//                             <View>
//                                 <Text style={styles.pname}>Product_Name : {product.product_name}</Text>
//                                 <Text style={styles.pdetails}>Product_Details : {product.product_details}</Text>
//                                 <Text style={styles.pquantity}>Product_Quantity : {product.product_quantity}</Text>
//                             </View>
//                             <TouchableOpacity onPress={() => navigation.navigate("LeadList", vn)}>
//                                 <Text>{length}</Text>
//                             </TouchableOpacity>

//                         </View>

//                     })
//                     }
//                 </View>
//                 <View style={{ height: 100 }}></View>

//                 <View style={styles.register}>

//                     <TouchableOpacity >
//                         <Text style={{ color: 'black', fontSize: 18 }} onPress={() => navigation.navigate("Register",compn)}>Add Vendor</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.padd} >
//                     <TouchableOpacity>

//                         <Text style={{ fontSize: 30, color: "#fff" }} onPress={() => navigation.navigate("Add_Product")}>+</Text>
//                     </TouchableOpacity>

//                 </View>
//             </ScrollView>

//         </View>


//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         height: "100%",
//         alignItems: 'center',
//         backgroundColor: '#fff'
//         // flex: 1,
//         // position:'absolute',
//         // width: "100%"
//     },
//     innerconatiner: {
//         marginTop: 40,
//         alignItems: 'center'
//     },
//     addedproduct: {
//         margin: 15,
//         padding: 10,
//         borderRadius: 10,
//         width: '90%',

//         // height: 90,
//         borderColor: '#000',
//         borderWidth: 1,
//         flexDirection: 'row',
//         // shadowColor: '#B6B6B6',
//         // shadowOffset: { width: 0, height: 4 },
//         // shadowOpacity: 0.6,
//         // elevation: 3,
//         justifyContent: 'space-between'
//     },
//     pname: {
//         color: 'red',
//         fontSize: 20,
//         paddingBottom: 5,
//         fontWeight: 'bold'
//     },
//     pdetails: {
//         color: '#000',
//         fontSize: 18
//     },
//     pquantity: {
//         color: '#000',
//         fontSize: 20
//     },

//     register: {
//         position: 'absolute',
//         borderRadius: 5,
//         // backgroundColor: "#fff",
//         borderWidth: 1,
//         // fontWeight:'bold',
//         fontSize: 18,
//         height: 40,
//         width: 120,
//         color: "#000",
//         left: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         bottom: 15

//     },
//     padd: {
//         position: 'absolute',

//         right: 10,
//         bottom: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 30,
//         backgroundColor: "#000",
//         // borderWidth: 1,
//         // fontWeight:'bold',

//         height: 60,
//         width: 60,

//         color: "#fff",
//         // bottom: 0
//     }
// })

// export default CompanyLanding;

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
    const [customer, setCustomer] = useState([]);
    const [myData, setMyData] = useState(null);
    const compname = myData ? myData.Company_name : '';
    const compn = compname;
    const prod = CustomerData.product;

    // console.log("compn: " + compn);



    // const navigation = useNavigation();


    const route = useRoute();
    const PhoneNumber = route.params


    useEffect(() => {

        getUserData();

    }, []);




    const getUserData = async () => {

        try {
            const data = await firestore().collection('Companies').doc(PhoneNumber).get();
            // console.log(data._data);
            setMyData(data._data)

        } catch (error) {



        }

    }

    useEffect(() => {
        getData();

    }, [product]);

    function getData() {
        firestore()
            .collection('Products')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => ProductData.push({ ...doc.data(), id: doc.id }))
                // console.log("ProductData",ProductData);
                const filtering = ProductData?.filter((user) => user.company_name === compn)
                // console.log("FilteringP", filtering)
                setProduct(filtering)

            });
        return
    }

    useEffect(() => {
        getcustomerdata();
    }, [])

    function getcustomerdata() {
        firestore().
            collection('Customers').
            get()
            .then(querySnapshot => {
                console.log('Total Customer: ', querySnapshot.size);
                querySnapshot.forEach((doc) => CustomerData.push({ ...doc.data(), id: doc.id }))
                // console.log("CustomerData1", CustomerData);
                const filtering = CustomerData?.filter((user) => user.product_name === prod)
                console.log("Filteringgg", filtering);
                setCustomer(filtering)

            });
        return
    }

    const length = customer.length;
    // console.log("l",length)

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row',justifyContent:'center',position:'absolute'}}>

                <Text style={{ color: 'black', fontSize: 20 }}>Company Landing Page</Text>

                <Text style={{ fontSize: 25,  color: 'black', margin: 20, }}> Hello {myData ? myData.Company_name : ''}</Text>
                {/* <View style={{ position: 'absolute', width: '35%', }}> */}
                    <TouchableOpacity onPress={() => navigation.navigate("VendorList", compn)}>
                        <Text style={{}}>Vendor_List</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>



            <ScrollView style={{ width: '100%' }}>
                <View style={styles.innerconatiner}>
                    {product.map((product) => {
                        const prod = product.product_name;
                        const vn = [prod]
                        return <View style={styles.addedproduct} key={product.id}>
                            <View>
                                <Text style={styles.pname}>Product_Name : {product.product_name}</Text>
                                <Text style={styles.pdetails}>Product_Details : {product.product_details}</Text>
                                <Text style={styles.pquantity}>Product_Quantity : {product.product_quantity}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("LeadList", vn)}>
                                <Text style={{ fontSize: 30 }}>{length}</Text>
                                {/* <Icon name="bell" size={25} color="grey" /> */}
                            </TouchableOpacity>
                        </View>

                    })
                    }
                </View>

                <View style={{ height: 100 }}></View>
            </ScrollView>

            <View style={styles.register}>

                <TouchableOpacity >
                    <Text style={{ color: 'black', fontSize: 18 }} onPress={() => navigation.navigate("Register", compn)}>Add Vendor</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.padd} >
                <TouchableOpacity>

                    <Text style={{ fontSize: 30, color: '#fff' }} onPress={() => navigation.navigate("Add_Product")}>+</Text>
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
        marginTop: 50,
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