import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute, useNavigation } from '@react-navigation/native';


const CustomerRequirement = () => {

    const [cleads, setCleads] = useState([]);
    const CData = [];
    const navigation = useNavigation();
    const route = useRoute();
    const cn = route.params
    // const vn=route.params
    const prod = cn[0] ? cn[0] : ''

    useEffect(() => {
        getCust()
    }, [])

    function getCust() {
        firestore().
            collection("Customers").
            get()
            .then(querySnapshot => {
                console.log('Total Customers: ', querySnapshot.size);


                //    querySnapshot.forEach(documentSnapshot => {
                //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                //   });
                querySnapshot.forEach((doc) => CData.push({ ...doc.data(), id: doc.id }))
                console.log("CData", CData)
                // setCleads(CData)
                const filtering = CData?.filter((user) => user.name === prod)
                console.log("Filtering", filtering);
                setCleads(filtering)
            }
            )
    }



    console.log("CData", cleads);

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    cleads.map((cleads) => {
                        return <View style={styles.innercontainer} key={cleads.id}>
                            <View style={styles.card}>
                                <Text style={styles.txt}>Name : {cleads.name}</Text>
                                <Text style={styles.txt}>Mobile Number : {cleads.mobile_number}</Text>
                                <Text style={styles.txt}>Email : {cleads.email}</Text>
                                <Text style={styles.txt}>Product Name : {cleads.product}</Text>
                                <Text style={styles.txt}>Address : {cleads.address}</Text>
                                <Text style={styles.txt}>Vendor Name : {cleads.vendor}</Text>


                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("FollowUp")} style={{alignItems:"center",left:-20}}>
                                <Text style={{borderRadius:10,borderColor:"#000",borderWidth:1,color:"#000",fontSize:25,width:"48%",paddingHorizontal:35}}>Follow Up</Text>
                            </TouchableOpacity>
                        </View>
                    })
                }


            </ScrollView>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:"100%",
        // position: 'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',
        top:10,
    
    },
    innercontainer: {
        marginTop: 60,
        height:"100%",
        left:20
        // alignItems: 'center',
        //  marginBottom: 10,
    },
    card: {
        // borderWidth:1,
        marginBottom: 20,
        width: "80%",
        // height:"100%",
        left: 20,
       

        borderRadius: 10,
        paddingHorizontal: 10
    },
    txt: {
        fontSize: 20,
        color: "#000"
    }
})

export default CustomerRequirement;