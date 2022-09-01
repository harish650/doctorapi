import React, { useState } from "react";
import { Button, Text, StyleSheet, TextInput, View } from "react-native";
import {Formik} from 'formik'
import { TouchableOpacity } from "react-native-gesture-handler";
import { RadioButton } from 'react-native-paper';
export default function logreg({adds}){
    const images={
        value:{
            '1':require('../assets/offradio.png'),
            '2':require('../assets/onradio.png'),

        }
    }
    const [ra,setra]=useState('1')
    const [checked, setChecked] = React.useState('doctorregister');
    return(
        <View style={{marginTop:250}}>
            <Formik initialValues={{email:'',password:''}}
            onSubmit={(values)=>{
                adds(values,checked);

            }}>
                {(props)=>(
               <View>
            <TextInput 
            style={sta.input}
            placeholder="Email-id"
            onChangeText={props.handleChange('email')}
            value={props.values.email}/>

            <TextInput 
            style={sta.input}
            placeholder="Password"
            onChangeText={props.handleChange('password')}
            secureTextEntry
            value={props.values.password}/>
<View style={{flexDirection:'row',justifyContent:'center'}}>
<RadioButton
        value="doctorregister"
        status={ checked === 'doctorregister' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('doctorregister')}
      /><Text style={{color:'pink'}}>DOCTOR</Text>
      <RadioButton
        value="patientregister"
        status={ checked === 'patientregister' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('patientregister')}
      /><Text>PATIENT</Text>
</View>
            <View style={sta.col1}>
            <Button title='Login' onPress={props.handleSubmit}/>
            </View>
            </View>
            )}         
              </Formik>
        </View>
    )
}
const sta=StyleSheet.create({
    input:{
        borderWidth:1,
        margin:10,
        marginLeft:50,
        marginRight:50,
        borderRadius:20,
        borderColor:'white',
        backgroundColor:'white'
    },
    col1:{
        marginTop:20,
        marginLeft:20,
        marginRight:30,   
        flexDirection: "row",
        justifyContent: "space-around",
        
    },
})