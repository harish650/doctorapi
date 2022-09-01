import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text,TextInput,View } from "react-native";
import { Button } from "react-native";
import { getDatabase, ref, child,get ,set} from "firebase/database";

export default function appointorder({navigation}){
    const[date,setdate]=useState()
    const[time,settime]=useState()
    const[yno,setyno]=useState()
    const[email,setemail]=useState()
    const send=()=>{
        
        const dbRef = ref(getDatabase());
        get(child(dbRef,`appointment`)).then((snapshot) => {
              const obj=snapshot.val();

              const db = getDatabase();
              for(let id in obj)
              {
                 // console.log(navigation.getParam('name'))
                  if(email===obj[id].emailid){
                       console.log('yes')
                         set(ref(db, 'appointment/'+id), {
                          date:date,
                          emailid:obj[id].emailid,
                          extra:yno,
                          fullname:obj[id].fullname,
                          gender:obj[id].gender,
                          key:obj[id].key,
                          phoneno:obj[id].phoneno,
                          time:time

                        
                        });
                    } 
                 
              }

            } 
           
          )
    }
    return(
        <ImageBackground source={require('../assets/ap.jpg')} style={{flex:1,width:null,height:null}}>
            <TextInput style={sta.bomr} placeholder="date" onChangeText={(val)=>setdate(val)}/>
            <TextInput style={sta.bor} placeholder="time" onChangeText={(val)=>settime(val)}/>
            <TextInput style={sta.bor} placeholder="want to fix or not" onChangeText={(val)=>setyno(val)}/>
            <TextInput  style={sta.bor} placeholder="enter email of patient" onChangeText={(val)=>setemail(val)}/>
            <View style={sta.col}><Button title='submit'onPress={send}/></View>
                      </ImageBackground>
    )
}
const sta=StyleSheet.create({
  bomr:{
    borderWidth:1,
    borderColor:'white',
     marginTop:100,
    marginBottom:10,
    marginLeft:20,
    marginRight:20,
    borderRadius:20,
    padding:10,
    backgroundColor:'white'
},
bor:{
   borderWidth:1,
   borderColor:'white',
    margin:20,
   
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
})