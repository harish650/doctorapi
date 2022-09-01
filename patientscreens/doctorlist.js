import React, { useEffect, useState } from "react";
import {Button, FlatList, ImageBackground, StyleSheet, Text,View} from 'react-native'
import { getDatabase, ref, child, onValue,get } from "firebase/database";
import {MaterialIcons,AntDesign,Zocial,Foundation} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
export default function doctorlist({navigation}){

    const [doclist,setdoclist]=useState()

    const show=()=>{
        const dbRef = ref(getDatabase());
get(child(dbRef,`doctorregister`)).then((snapshot) => {
      const obj=snapshot.val();
      const obj1=[]
      for(let key in obj)
      {
          obj1.push(obj[key])
      }
      //obj1.key=Math.random().toString
      setdoclist(obj1)
     // console.log("values")
      //console.log(obj1)
    } 
   
  )
    }

    return(
        <ImageBackground source={require('../assets/im6.jpg')} style={{flex:1,width:null,height:null}}>
              <View style={{margin:30}}><Button title='Show doctorslist' onPress={show}/></View>
            <FlatList
            data={doclist}
            renderItem={({item})=> (
                <TouchableOpacity onPress={()=>navigation.navigate('homepa',item)}>
                <View style={sta.list}>
                    <View style={{padding:6,justifyContent:'center'}}>
                    <Text>Name:{item.fullname}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>Specialist:{item.Specialist}</Text>
                    <AntDesign name='select1' size={28} /></View>
                    <Text>Email:{item.emailid}</Text>
                    <Text>Address:{item.address}</Text></View></View></TouchableOpacity>
             ) }/>
         
        </ImageBackground>
    )
}
const sta=StyleSheet.create({
    list:{
        margin:10,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'violet'
    }
})