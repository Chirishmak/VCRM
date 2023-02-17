import React from 'react';
import {View,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
// import PhoneNumber from './components/PhoneNumber';
// import VerifyCode from './components/VerifyCode';
import CompanyLanding from "./src/CompanyLanding";
import Add_Product from "./src/Add_Product";
import Register from './src/Register';
import VendorLanding from './src/VendorLanding';
import Leads from './src/LeadsPage';
import NewCustomer from './src/NewCustomer';
import MyLeads from './src/MyLeads';


const Stack = createStackNavigator();


const App=()=>{
  return(
    <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "VCRM Login" ,
            headerStyle: {
              height: 100,
              borderBottomEndRadius: 25,
              backgroundColor: "cyan",
              elevation: 10,
              shadowColor: "#000",
              borderBottomLeftRadius: 25
            }
          }}>
        </Stack.Screen>         
           <Stack.Screen 
          name="CompanyLanding"
          component={CompanyLanding}
          options={{
            headerShown:false,
          }}>
        </Stack.Screen>
        <Stack.Screen  
          name="Add_Product"
          component={Add_Product}
          options={{
            headerTitle:  "Add_Product" ,
            headerStyle: {
              height: 100,
              borderBottomEndRadius: 20,
              backgroundColor: "cyan",
              elevation: 3,
              shadowColor: "#000",
              borderBottomLeftRadius: 20
            }
          }}>
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitle:  "Vendor_Registration" ,
            headerStyle: {
              height: 100,
              borderBottomEndRadius: 20,
              backgroundColor: "cyan",
              elevation: 3,
              shadowColor: "#000",
              borderBottomLeftRadius: 20
            }
          }}>
        </Stack.Screen>
        <Stack.Screen 
          name="VendorLanding"
          component={VendorLanding}
          options={{
            headerShown:false,
          }}>
        </Stack.Screen>
        <Stack.Screen 
          name="Leads"
          component={Leads}
          options={{
            headerShown:true,
          }}>
        </Stack.Screen>
        <Stack.Screen 
          name="NewCustomer"
          component={NewCustomer}
          options={{
            headerShown:true,
          }}>
        </Stack.Screen>
        <Stack.Screen 
          name="MyLeads"
          component={MyLeads}
          options={{
            headerShown:true,
          }}>
        </Stack.Screen>
        </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}