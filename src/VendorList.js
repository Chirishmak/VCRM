import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';



const VendorList = () => {

    const [vlist, setVlist] = useState([]);
    const Vendorlist = []
    const route = useRoute();
    const compn = route.params
    const Comp_n=compn;


    useEffect(() => {
        getVlist();
    }, [])

    function getVlist() {
        firestore().
            collection("vendor_registered").
            get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => Vendorlist.push({ ...doc.data(), id: doc.id }))
                console.log("VendorList", Vendorlist);
                const filtering = VendorList?.filter((user) => user.id === Comp_n)
                console.log("FilteringVlist", filtering);
                setVlist(filtering)



            }
            )
    }


    return (
        <View style={styles.container}>
            <Text>Vendor's List</Text>
           {
            vlist.map((vlist)=>{
                return <View>
                    <Text>Company : {vlist.Comp_n} </Text>
                    <Text>Vendor_Name : {vlist.firstname}</Text>
                </View>
            })
           }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default VendorList;