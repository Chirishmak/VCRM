import Reat, {useEffect,useState} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation,useRoute} from '@react-navigation/native';

// import { ScrollView } from 'react-native-gesture-handler';

const LeadList = () =>{

    const [customer, setCustomer] = useState([])
    let CustomerData = []
    const navigation = useNavigation();
    const route = useRoute();
    const vn = route.params
    // const vn=route.params
    const prod = vn[0] ? vn[0] : ''


    useEffect(()=>{
        getcustomerdata();
    },[])

    
        function getcustomerdata(){
            firestore().
            collection('Customers').
            get()
            .then(querySnapshot => {
                console.log('Total Customer: ', querySnapshot.size);


                //    querySnapshot.forEach(documentSnapshot => {
                //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                //   });
                querySnapshot.forEach((doc) => CustomerData.push({ ...doc.data(),id :doc.id}))
                console.log("CustomerData", CustomerData)
                // setCustomer(CustomerData);
                const filtering = CustomerData?.filter((user)=>user.product === prod)
                console.log("Filtering", filtering);
                setCustomer(filtering)

            });
        return
        } 

        

        console.log("customer",customer)
        // console.log("length",length);

        return(
            <View style={styles.container}>
                <ScrollView>
                    {
                        customer.map((customer)=>{
                            const cname = customer.name;
                            const cn = [cname]
                            return <View style={styles.innercontainer} key={customer.id}>
                                <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate("CustomerRequirement",cn)}>
                                    <Text style={styles.txt}>Name : {customer.name}</Text>
                                    {/* <Text style={styles.txt}>Mobile Number : {customer.mobile_number}</Text>
                                    <Text style={styles.txt}>Email : {customer.email}</Text>
                                    <Text style={styles.txt}>Product Name : {customer.product}</Text>
                                    <Text style={styles.txt}>Address : {customer.address}</Text> */}
                                    <Text style={styles.txt}>Vendor Name : {customer.vendor}</Text>
                                    

                                </TouchableOpacity>
                            </View>
                        })
                    }
               </ScrollView>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:"100%",
    },
    innercontainer:{
        // height:"20%",
    },
    card:{
        borderWidth:1,
        marginBottom:10,
        width:"80%",
        // height:"50%",
        left:20,
        top:10,
        borderRadius:10,
        paddingHorizontal:10
    },
    txt:{
        fontSize:18,
        color:"#000"
    }
})

export default LeadList;