import React, { useState,useEffect } from "react";
import {View,Text,Modal,StyleSheet, ScrollView, ImageBackground} from "react-native"
import { Button } from "react-native";
import { TextInput, TouchableOpacity ,Linking,Keyboard} from "react-native";
import {Feather,Ionicons} from '@expo/vector-icons';
import { getDatabase, ref, child,get ,set,onValue} from "firebase/database";

export default function selectscreen({navigation})
{
    const[textmsg,settextmsg]=useState()
    const[textmsg2,setmsg2]=useState()
    const [recei,setreceive]=useState()
    const [on,seton]=useState(false)
    const send=()=>{
        Keyboard.dismiss()
        setmsg2(textmsg)
        const dbRef = ref(getDatabase());
        get(child(dbRef,`patientregister`)).then((snapshot) => {
              const obj=snapshot.val();
             // const obj1=[]
              const db = getDatabase();
              for(let id in obj)
              {
                  if(navigation.getParam('emailid')===obj[id].emailid){
                       
                         set(ref(db, 'patientregister/'+id), {
                          Dateofbirth:obj[id].Dateofbirth,
                          address:obj[id].address,
                          asadharno:obj[id]. asadharno,
                          doctor_patient:obj[id].doctor_patient,
                          emailid:obj[id].emailid,
                        seldoctor:obj[id].seldoctor,
                        fullname:obj[id].fullname,
                        gender:obj[id].gender,
                        key:obj[id].key,
                        password:obj[id].password,
                        phoneno:obj[id].phoneno,
                        reenterpassword:obj[id].reenterpassword,
                        appoint:'0',
                        chat:textmsg
                        
                        });
                    } 
                 
              }
           //  settemp(obj1)
            } 
           
          )
    }

    useEffect(()=>{
        const db = getDatabase();
const starCountRef = ref(db, 'patientregister');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
// const obj=[];
 for(let id in data){
     if(navigation.getParam('emailid')==data[id].emailid){
     if(data[id].appoint=='1'){
         {
           //  setreceive(data[id].chat)
            // console.log(textmsg2)
            setreceive(data[id].chat)
         }}
     }
 }
});
    });
    return(
        <View>
            <View>
                <Modal visible={on}><ImageBackground source={require('../assets/im14.jpg')} style={{flex:1,width:null,height:null}}>
                    <TouchableOpacity onPress={()=>seton(false)}><Ionicons name='md-close-circle'/></TouchableOpacity>
                    <View style={{flex:1}}>
                    <ScrollView>
                    <View style={sta.outer}> 
                      <View style={sta.one}><Text style={{fontSize:20}}>send:</Text>
                        <TextInput style={sta.bo} value={textmsg2}/></View>
                     <View style={sta.two}><Text style={{fontSize:20}}>received:</Text>
                        <TextInput style={sta.bo1} value={recei}/></View>
                        </View></ScrollView>
                        <View style={sta.inner} >
                    <TextInput placeholder="type here to send"  onChangeText={(val)=>settextmsg(val)}/>
                   <TouchableOpacity onPress={send}><Feather name='send' size={22} style={{color:'green'}}/></TouchableOpacity></View></View>
                   </ImageBackground></Modal>
            </View><ImageBackground source={require('../assets/ch1.jpg')} style={{width:350,height:650}} >
           <View style={sta.bott1}><Button title='fix an appointment'onPress={()=>navigation.navigate('appointorder')}/></View>
           <View style={sta.bott}><Button title='make a meet' onPress={()=>Linking.openURL('https://meet.google.com/eho-ygyy-tcc?authuser=0&hl=en')}/></View>
           <View style={sta.bott}><Button  title="chat with patient" onPress={()=>seton(true)}/></View>
            </ImageBackground>
        </View>
    )
}
const sta=StyleSheet.create({
    outer:{
        borderWidth:1,
        borderColor:'white',
        marginBottom:600,
      //  position:'relative'
    },   
     inner:{    
         margin:10,
         padding:10,
            borderWidth:1,
            borderRadius:20,
        flexDirection:'row',
    justifyContent:"space-between"},
    one:{
        marginTop:350,
        marginLeft:40,
        marginRight:20,
        
        flexDirection:'row',
        
    },
    two:{
       marginTop:20,
       marginLeft:40,
       flexDirection:'row',
       justifyContent:'space-between' ,
       fontSize:30
    },
    bo:{
        borderWidth:1,
        borderRadius:20,
     fontSize:20  ,
     marginLeft:78,
     marginRight:20,
     padding:4,
    },
    bo1:{
        borderWidth:1,
        borderRadius:20,
     fontSize:20  ,
    // marginLeft:8,
     marginRight:20,
     padding:4
    },
    bott1:{
        marginTop:300,
        marginLeft:100,
        marginRight:100
    },
    bott:{
        marginTop:30,
        marginRight:100,marginLeft:100
    }
})