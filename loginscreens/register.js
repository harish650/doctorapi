import React,{useState} from "react";
import {Formik} from 'formik';
import { Button, TextInput, View ,StyleSheet, ScrollView,Text,ImageBackground} from "react-native";
//import maincreen from "./maincreen";
import { RadioButton } from 'react-native-paper';
import { getDatabase, ref, push } from "firebase/database";

export default function register({navigation}){
    const images={
        value:{
            '1':require('../assets/offradio.png'),
            '2':require('../assets/onradio.png'),

        }
    }
    const [ra,setra]=useState('1')
    const [checked, setChecked] = React.useState('doctorregister');
    return(
        
        <ImageBackground source={require('../assets/im4.jpg')} style={{flex:1,width:null,height:null}}>
    

        <ScrollView>
        <View style={sta.container}>
        
            <Formik
            
           initialValues={{name:'',dob:'',gender:'',phno:'',adhno:'',dopa:'',add:'',email:'',pass:'',repass:'',}}
           onSubmit={(values)=>{
            values.key=Math.random().toString()
            if(checked=='doctorregister'){
            const db = getDatabase();
            push(ref(db, 'doctorregister'), {
                fullname:values.name,
                Dateofbirth:values.dob,
                gender:values.gender,
                 phoneno:values.phno,
                 asadharno:values.adhno,
                 doctor_patient:'doctor',
                 address:values.add,
                 emailid:values.email,
                 password:values.pass,
                 reenterpassword:values.repass,
                 key:values.key,
                 Specialist:values.dopa
            });}
            else{
                const db = getDatabase();
            push(ref(db, 'patientregister'), {
                fullname:values.name,
                Dateofbirth:values.dob,
                gender:values.gender,
                 phoneno:values.phno,
                 asadharno:values.adhno,
                 doctor_patient:'patient',
                 address:values.add,
                 emailid:values.email,
                 password:values.pass,
                 reenterpassword:values.repass,
                 key:values.key,
                 seldoctor:"",
                 chat:"",
                 appoint:'',
            })
            }
               navigation.navigate('maincreen') 
               //console.log(values)
           }}>

               {(props)=>(
                   <View style={sta.con}>
                       
                   <TextInput style={sta.bor}
                       placeholder="Fullname"
                       onChangeText={props.handleChange('name')}
                       value={props.values.name}
                   />
               <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                   <TextInput style={sta.bor1}
                       placeholder="dob"
                       onChangeText={props.handleChange('dob')}
                       value={props.values.dob}
                   />
                
                   <TextInput style={sta.bor1}
                       placeholder="gender"
                       onChangeText={props.handleChange('gender')}
                       value={props.values.gender}
                   />
                </View>
              

                  <TextInput style={sta.bor}
                       placeholder="phoneno    +91"
                       onChangeText={props.handleChange('phno')}
                       value={props.values.phno}
                   />
                   <TextInput style={sta.bor}
                       placeholder="Aadharno"
                       onChangeText={props.handleChange('adhno')}
                       value={props.values.adhno}
                   />
                   <TextInput style={sta.bor}
                    placeholder="Specialist(if you are patient ignore it)"
                    onChangeText={props.handleChange('dopa')}
                       value={props.values.dopa}
                   />
                   
                   <View style={{flexDirection:'row',justifyContent:'center'}}>
    <RadioButton 
        value="doctorregister"
        status={ checked === 'doctorregister' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('doctorregister')}
      /><Text>DOCTOR</Text>
      <RadioButton
        value="patientregister"
        status={ checked === 'patientregister' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('patientregister')}
      /><Text>PATIENT</Text>
</View>

                   <TextInput style={sta.bor}
                       multiline
                       placeholder="address"
                       onChangeText={props.handleChange('add')}
                       value={props.values.add}
                   />
                   <TextInput style={sta.bor}
                       placeholder="emailid"
                       onChangeText={props.handleChange('email')}
                       value={props.values.email}
                   />
                   <TextInput style={sta.bor}
                       placeholder="password"
                       onChangeText={props.handleChange('pass')}
                       value={props.values.pass}

                     
                   />
                   <TextInput style={sta.bor}
                       placeholder="renterpassword"
                       onChangeText={props.handleChange('repass')}
                       value={props.values.repass}
                   />

                    <View style={sta.col}>
                   <Button title="REGISTER" onPress={props.handleSubmit}/>
                   </View>
                   </View>
               )}
               
               

           </Formik>

        </View>

        </ScrollView>
    </ImageBackground>
    )
}
const sta=StyleSheet.create({
    bor:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        margin:20,
        borderRadius:20,
         //backgroundColor:'white',
         shadowOffset:{width:10,height:10},
         shadowColor:"#333",
  
         shadowOpacity:5,
         shadowRadius:3,
    },
    head:{
        marginTop:40,
        padding:20,
        borderWidth:0.5,
        backgroundColor:'pink',
        alignItems:'center',
        
    },
    col:{
        marginBottom:20,
        marginRight:100,
        marginLeft:100,
    },

     con1:{
        width:500,
        height:600
     },
     bor1:{
        borderWidth:1,
        borderColor:'black',
        padding:10,
        margin:20,
        borderRadius:20,
        paddingLeft:50,
        paddingRight:50
       // backgroundColor:'white'

     }})