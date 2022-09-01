import React, { useState,useEffect } from "react";
import {View,Text,Modal,StyleSheet, ScrollView, ImageBackground, Keyboard} from "react-native"
import { Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { getDatabase, ref, child,get ,set,onValue} from "firebase/database";
import {Feather,Ionicons} from '@expo/vector-icons';
export default function chatscreen({navigation}){
    const [on,seton]=useState(false)
    const [recei,setreceive]=useState("                                  ")
    const[textmsg,settextmsg]=useState("                                  ")
    const[textmsg2,setmsg2]=useState()
    const[email,setemail]=useState()
    const text={name:''}
    const rec={name:''}
    const send=()=>{
        Keyboard.dismiss()
       // setmsg2(textmsg)
       settextmsg(text.name)
        const dbRef = ref(getDatabase());
        get(child(dbRef,`patientregister`)).then((snapshot) => {
              const obj=snapshot.val();
             // const obj1=[]
              const db = getDatabase();
             
              for(let id in obj)
              {
                  if(email===obj[id].emailid){
                       
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
                        appoint:'1',
                        chat:text.name
                        
                        });
                    } 
                 
              }
             
            } 
           
          )
    //console.log(textmsg)
    }
    useEffect(()=>{
        const db = getDatabase();
const starCountRef = ref(db, 'patientregister');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
// const obj=[];
 for(let id in data){
     if(email==data[id].emailid){
     if(data[id].appoint=='0'){
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
                <Modal visible={on}>
                    <ImageBackground source={require('../assets/im14.jpg')} style={{flex:1,width:null,height:null}}>
                    <TouchableOpacity onPress={()=>seton(false)}><Ionicons name='md-close-circle'/></TouchableOpacity>
                    <View style={{flex:1}}>
                    <ScrollView>
                        <View style={sta.outer}> 
                      <View style={sta.one}><Text style={{fontSize:20}}>send:</Text>
                        <TextInput style={sta.bo} value={textmsg}/></View>
                     <View style={sta.two}><Text style={{fontSize:20}}>received:</Text>
                        <TextInput style={sta.bo1} value={recei}/></View>

                        </View></ScrollView>
                        <View style={sta.inner} >
                    <TextInput placeholder="type here to send" onChangeText={(val)=>text.name=val}/>
                   <TouchableOpacity onPress={send}><Feather name='send' size={22} style={{color:'green'}}/></TouchableOpacity></View></View>
                   </ImageBackground></Modal><ImageBackground source={require('../assets/ch1.jpg')} style={{width:350,height:680}}>
                <TextInput style={{marginTop:100,marginLeft:60,marginRight:50,borderWidth:1}}placeholder="enter your email to chat" onChangeText={(val)=>setemail(val)}/>
                <View style={{marginTop:40,marginRight:100,marginLeft:100}}><Button title="openchat" onPress={()=>seton(true)}/></View></ImageBackground>
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
    out:{
        marginTop:400,
        marginLeft:100,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'yellow'
    },
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
    }
})