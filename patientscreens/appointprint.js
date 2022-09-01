import React, { useState } from "react";
import { FlatList, Text,View } from "react-native";
import { Button, TextInput } from "react-native";
import { getDatabase, ref, child,get ,set} from "firebase/database";

export default function appointprint({navigation}){
    const[mail,setmail]=useState()
    const [val,setval]=useState()
    const send=()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef,`appointment`)).then((snapshot) => {
              const obj=snapshot.val();

            //  const db = getDatabase();
              for(let id in obj)
              {
                 // console.log(navigation.getParam('name'))
                  if(mail===obj[id].emailid){
                      setval(obj[id])
                      console.log(obj[id])
                    } 
                 
              }

            } 
           
          )
    }
    return(
        <View>
<TextInput placeholder="enter the emailid..." onChangeText={(val)=>setmail(val)}/>
<Button title='GET ORDER' onPress={send} />
<FlatList
data={val}
renderItem={({val1})=>(
          <View>
              <Text>{val1.fullname}</Text>
              <Text>{val1.gender}</Text>
              <Text>{val1.emailid}</Text>
              <Text>{val1.phoneno}</Text>
              <Text>{val1.date}</Text>
              <Text>{val1.time}</Text>
              <Text>{val1.extra}</Text>
          </View>)}/>
          </View>
    )
}