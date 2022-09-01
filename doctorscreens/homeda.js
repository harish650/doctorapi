import React, { useState } from "react";
import {Text,View,StyleSheet, FlatList, ImageBackground} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native";
import {MaterialCommunityIcons,AntDesign,Zocial,Foundation} from '@expo/vector-icons';

import { getDatabase, ref, child, push,get ,set} from "firebase/database";
export default function homeda({navigation}){
    const doctoremail=navigation.getParam('email')
    const [use,setuse]=useState()
    const show=()=>{
        
        const dbRef = ref(getDatabase());
        get(child(dbRef,`patientregister`)).then((snapshot) => {
              const obj=snapshot.val();
              const obj1=[];

              for(let key in obj)
              {
                if(navigation.getParam('email')===obj[key].seldoctor){
                  obj1.push(obj[key])
                }
                                    
                 
              }
             setuse(obj1)
            //  for(let id in obj1){
              // console.log(obj1)
            } 
           
          )
    }
    return(
      <ImageBackground source={require('../assets/now.jpg')} style={{flex:1,width:null,height:null}}>
                <View><Text >Patients that they selected you</Text>
        <View style={sta.butt}><Button title="show patients" onPress={show}/></View>
        <FlatList
        data={use}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('selectscreen',item)}>
            <View style={sta.list}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text>{item.fullname}</Text>
              <Text>{item.emailid}</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text>{item.gender}</Text>
              <Text>{item.Dateofbirth}</Text>
              </View>
             <View style={{flexDirection:'row',justifyContent:'space-around'}}><Text>{item.address}</Text>
              <MaterialCommunityIcons size={20} name='selection-ellipse-arrow-inside'/></View>
              </View></TouchableOpacity>
        )}/></View></ImageBackground>


    )
}
const sta=StyleSheet.create({
    butt:{
        marginLeft:100,
        marginRight:100,
        marginTop:20
    },
    list:{
        margin:10,
        borderWidth:1,
        borderRadius:30,
        padding:20,backgroundColor:'beige'
    }
})