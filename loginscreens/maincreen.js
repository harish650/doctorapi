import React, { useEffect } from "react";
import { useState } from 'react';
import {  Button, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native';
//import Forgotpass from "./forgotpass";
import Logreg from './logreg';
import { getDatabase, ref, child, onValue,get } from "firebase/database";
export default function maincreen({navigation})
{
    
    const [use,setuse]=useState()
 
const [temp,setreg]=useState('1')

  const adds=(val,checked)=>{
    // val.key=Math.random().toString();
    //  setuse((preval)=>{
    //    return [val,...preval];

    //  })
    


const dbRef = ref(getDatabase());
get(child(dbRef,checked)).then((snapshot) => {
      const obj=snapshot.val();
      const obj1=[]
      for(let key in obj)
      {
          obj1.push(obj[key])
      }
      
   
  setuse( obj1)
  //console.log(obj1)

 })
 
for(let key in use){
  if(val.email==use[key].emailid&& val.password==use[key].password){
    
      if(checked=='patientregister'){
        navigation.navigate('homepa',val) 
      }else{
        navigation.navigate('homeda',val)
      }   
  }}
}
  
  
const addr=(val)=>{
    val.key=Math.random().toString();
        setreg((pre)=>{
            return [val,...pre]
        })
}
  

       
  
  return (
    <ImageBackground source={require('../assets/im1.jpg')} style={{flex:1,width:null,height:null}}>

    {/* <FlatList
    data={use}
    renderItem={({item})=>(
    <Text>{item.doctor_patient}</Text>)}/> */}
    {/* <View>{use?use.map((a)=>{<View><Text>{a.fullname}</Text></View>}):''}</View> */}
        <Logreg adds={adds}/>

      
        <TouchableOpacity style={sta.col1}>
          <Button title='Register' onPress={()=>navigation.navigate('register')}/>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>navigation.navigate('forgotpass')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity> */}
    </ImageBackground>
  );
}
const sta=StyleSheet.create({
    button:{
      margin:50,
      padding:40,
      flex:1,
      alignItems:"center",
      justifyContent:'center'
    },
    col1:{
      marginTop:20,
      marginLeft:20,
      marginRight:30,   
      flexDirection: "row",
      justifyContent: "space-around",
      
  },
  })