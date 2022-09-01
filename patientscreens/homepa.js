import React, { useState } from "react";
import { Formik } from "formik";
import {View,Text, StyleSheet,TextInput, TouchableOpacity, ScrollView, Button, Modal, Linking, ImageBackground, ImageBackgroundComponent} from 'react-native'
import {MaterialIcons,AntDesign,Zocial,Foundation} from '@expo/vector-icons';
import { getDatabase, ref, child, push,get ,set} from "firebase/database";
import {Feather,Ionicons} from '@expo/vector-icons';
export default function homepa({navigation}){
    const [temp,settemp]=useState()
        const mail=navigation.getParam('emailid')
        const email=navigation.getParam('email')
        const [on,seton]=useState(false)
    const con=()=>{
        
        const dbRef = ref(getDatabase());
        get(child(dbRef,`patientregister`)).then((snapshot) => {
              const obj=snapshot.val();
              const obj1=[]
              const db = getDatabase();
              for(let id in obj)
              {
                  if(navigation.getParam('email')===obj[id].emailid){
                       
                         set(ref(db, 'patientregister/'+id), {
                          Dateofbirth:obj[id].Dateofbirth,
                          address:obj[id].address,
                          asadharno:obj[id]. asadharno,
                          doctor_patient:obj[id].doctor_patient,
                          emailid:obj[id].emailid,
                        seldoctor:mail,
                        fullname:obj[id].fullname,
                        gender:obj[id].gender,
                        key:obj[id].key,
                        password:obj[id].password,
                        phoneno:obj[id].phoneno,
                        reenterpassword:obj[id].reenterpassword,
                        appoint:obj[id].appoint,
                        chat:obj[id].chat
                        
                        });
                    } 
                 
              }
           //  settemp(obj1)
            } 
           
          )
    
            
    }
    return(
        <ImageBackground source={require('../assets/im6.jpg')} style={{flex:1,width:null,height:null}}>
        <View style={{flex:1}}>
            <View><Modal visible={on}>
                <ImageBackground source={require('../assets/pat.jpg')} style={{width:350,height:700}}>
                <TouchableOpacity style={{marginLeft:180}} onPress={()=>seton(false)}><Ionicons size={20} name='md-close-circle'/></TouchableOpacity>
                <Formik
            
           initialValues={{name:'',gender:'',phno:'',email:'',}}
           onSubmit={(values)=>{
               seton(false)
            values.key=Math.random().toString()
            const db = getDatabase();
            push(ref(db, 'appointment'), {
                fullname:values.name,
                gender:values.gender,
                 phoneno:values.phno,
                 emailid:email,
                 date:'',
                 time:'',
                 key:values.key,
                 extra:" "
            });
            
               navigation.navigate('appoint') 
               //console.log(values)
           }}>

               {(props)=>(
                   <View style={sta.con}>
                       <View style={sta.head}>
                           <Text>APPOINMENT FORM </Text>
                       </View>
                   <TextInput style={sta.bomr}
                       placeholder="Patient Name"
                       onChangeText={props.handleChange('name')}
                       value={props.values.name}
                   />
               
                   <TextInput style={sta.bor}
                       placeholder="Phone Number"
                       onChangeText={props.handleChange('phno')}
                       value={props.values.phno}
                   />
              
                   <TextInput style={sta.bor}
                       placeholder="gender"
                       onChangeText={props.handleChange('gender')}
                       value={props.values.gender}
                   />
                
                   
                   
                   
                 
                  

                    <View style={sta.col}>
                   <Button title="MAKE AN APPOINMENT" onPress={props.handleSubmit}/>
                   </View>
                   </View>
               )}
               
               

           </Formik></ImageBackground>
                </Modal></View>
        <ScrollView>
          <View style={sta.outer}>
          <Text style={{fontSize:12,color:'red'}}>if feilds are empty select doctor in doctors list.Press the tick  after selection</Text>
            <View style={sta.print}>
                   <TouchableOpacity onPress={con}>      
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                        <Text>{navigation.getParam('fullname')}</Text>
                           <Text>{navigation.getParam('phoneno')}</Text></View>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                          <Text>{navigation.getParam('emailid')}</Text>
                           <Text>{navigation.getParam('Specialist')}</Text></View>
                            <AntDesign name='check' size={30} /></TouchableOpacity></View>
                              <View style={sta.bu1}><TouchableOpacity onPress={()=>seton(true)}><Text>Appoinment</Text></TouchableOpacity></View>
                                    <View style={sta.bu2}><TouchableOpacity onPress={()=>Linking.openURL('https://meet.google.com/eho-ygyy-tcc?authuser=0&hl=en')}><Text>online meet with doctor</Text></TouchableOpacity></View>
                                    <View style={sta.bu3}><TouchableOpacity onPress={()=>navigation.navigate('chatscreen')}><Text>discuss about symptoms in chat</Text></TouchableOpacity></View>
                                
        
                      
          </View></ScrollView>
        <View style={sta.down}>
            
  <View style={sta.list}>
<TouchableOpacity onPress={()=>navigation.navigate('doctorlist')}><View style={sta.inner}>
     
    <Foundation name='database' size={28} />
           <Text style={{fontSize:10}}>Doctor List</Text>
</View></TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('chatscreen')}><View style={sta.inner}>
    <AntDesign name='wechat' size={28} />
    <Text style={{fontSize:10}}>Chat</Text></View></TouchableOpacity>

{/* <TouchableOpacity onPress={()=>navigation.navigate('appointprint')}><View style={sta.inner}>
    <AntDesign name='download' size={28} />
    <Text style={{fontSize:10}}>Download</Text></View></TouchableOpacity> */}

<TouchableOpacity onPress={()=>Linking.openURL('https://meet.google.com/eho-ygyy-tcc?authuser=0&hl=en')}><View style={sta.inner}>
    <MaterialIcons name='voice-chat' size={28} />
    <Text style={{fontSize:10}}>Meet</Text></View></TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('maincreen')}><View style={sta.inner}>
<AntDesign name='back' size={28} />
<Text style={{fontSize:10}}>Back</Text></View></TouchableOpacity>
        </View></View></View>
        </ImageBackground>
    );
}
const sta=StyleSheet.create({
    list:{
    //flex:1,
 flexDirection:'row',
 justifyContent:'space-around'
    },
    down:{
      
        margin:10,
        backgroundColor:'white',
        padding:10,borderColor:'white',
      borderWidth:1,
      borderRadius:30,
      shadowOffset:{width:4,height:4},
       shadowColor:"#333",

       shadowOpacity:2,
       shadowRadius:3,
     // position:'relative',
    },
    inner:{
        flexDirection:'column'
    },
    outer:{
        borderWidth:1,
        borderColor:'white',
        marginBottom:550,
      //  position:'relative'
    },
    print:{
        padding:20,
       borderWidth:1,
       margin:10,
       borderRadius:30

    },
    bu1:{
        color:'white',
        marginTop:38,
       marginBottom:40,
       marginLeft:100,
       marginRight:100,
       color:'red',
       borderWidth:1,
       borderRadius:30,
       paddingTop:10,
       paddingBottom:10,
       paddingRight:10,
       paddingLeft:12,
       alignItems:'center',
       backgroundColor:'ivory'
    },
    bu2:{
        marginTop:20,
        marginBottom:40,
        marginLeft:100,
        marginRight:100,
        color:'red',
        borderWidth:1,
        borderRadius:30,
        padding:8,
       justifyContent:'center',
       backgroundColor:'lightpink'
     },
     bu3:{
        marginTop:20,
        marginBottom:40,
        marginLeft:100,
        marginRight:100,
        color:'red',
        borderWidth:1,
        borderRadius:30,
        padding:8,
       justifyContent:'center',
       backgroundColor:'deepskyblue'
     },
     bomr:{
         borderWidth:1,
         borderColor:'black',
          marginTop:100,
         marginBottom:10,
         marginLeft:10,
         marginRight:10,
         borderRadius:20,
         padding:10,
         backgroundColor:'white'
     },
     bor:{
        borderWidth:1,
        borderColor:'black',
         margin:10,
        
        borderRadius:20,
        padding:10,
        backgroundColor:'white'
     },
     col:{
         marginRight:100,
         marginLeft:100,
         marginBottom:100,
         marginTop:100
     },
     head:{
         marginLeft:100,
         fontFamily:'bold',
         fontSize:30
     }
})