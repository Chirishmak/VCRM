import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';



const Leads =()=>{
    const [pleads,setPleads]=useState([])

    const LeadsData=[]
    const ldata=[]

    const navigation = useNavigation();

    const route = useRoute();
    const vn = route.params
    // const vn=route.params
    const prod=vn[0]?vn[0]:''

    firestore()
    .collection('Customers')
    .get()
    .then(querySnapshot => {
        console.log('Total Customers: ', querySnapshot.size);

        querySnapshot.forEach((doc) => LeadsData.push({ ...doc.data(), id: doc.id }))
        console.log("LeadsData", LeadsData)
        // console.log('User ID: ', doc.id, doc.data());
        const filtering = LeadsData?.filter((user) => user.product === prod)
        console.log("Filtering", filtering);
       setPleads(filtering)
       console.log(pleads);
    // ldata.push(filtering)
    console.log(ldata);
        
    })





return(
    <View style={{flex:1,alignItems:'center'}}>
<Text style={{fontSize:25,color:'black'}}>{prod} Leads</Text>
 


{pleads.map((data) => {
    {/* console.log('aaassss',data.name) */}
                        {/* const prod=product.product_name */}
                       
                           


                    {/* pleads.length==0? <Text style={{fontSize:100,color:'black'}}>No Leads Yet...</Text> : */}
                    return  <View style={{width:'90%',backgroundColor:'#2E4053',margin:30,height:'20%',borderRadius:20}}>
                    <View style={{width:'100%',backgroundColor:'#85C1E9',borderRadius:20,height:'75%',padding:5}} key={data.email}>
                             {/* <TouchableOpacity onPress={()=>navigation.navigate('Leads',prod)}>  */}
                         <Text style={{fontSize:10,color:'black',left:20}}>Customer Name : {data.name}</Text>

                                <Text style={{fontSize:10,color:'black',left:20}}>Product Name : {data.product}</Text>
                                <Text style={{fontSize:10,color:'black',left:20}}>Customer contact no : {data.mobile_number}</Text>
                                <Text style={{fontSize:10,color:'black',left:20}}>Customer ALt contact no : {data.anumber}</Text>
                                <Text style={{fontSize:10,color:'black',left:20}}>Customer Address : {data.address}</Text> 
                                {console.log(ldata.name)}    

                            {/* </TouchableOpacity> */}
                         </View>
                         </View>
                        

                    })
                    }
                    




<View style={{height:70,width:70,borderRadius:35,backgroundColor:'black',position:'absolute',bottom:20,right:25,justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={()=>navigation.navigate('NewCustomer',vn)}>
<Text style={{color:'white',fontSize:40}}>+</Text></TouchableOpacity></View>

    </View>
)



}

export default Leads;