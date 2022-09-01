import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import {View,Text} from 'react-native'
import Registerstack from './stackscreen/registerstack';
import React from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import logreg from './loginscreens/logreg';
class App extends React.Component {
   
 
  // const [shopminders, setShopminders] = useState([])
componentDidMount()
{
  var firebaseConfig = {
    apiKey: "AIzaSyBAr1u1wAE-RWlnPRMhL92kcZ7e0toDkBQ",
    authDomain: "doctordb-bb4fb.firebaseapp.com",
    projectId: "doctordb-bb4fb",
    storageBucket: "doctordb-bb4fb.appspot.com",
    messagingSenderId: "354772698442",
    appId: "1:354772698442:web:9fe29833610c15e0a66db3",
    measurementId: "G-FS0WKC11JQ"
  };
  const app=firebase.initializeApp(firebaseConfig);
  //console.log(app)
  

}
  // useEffect(() => {
  //   const ref = Firebase.database().ref('users/uL0aWwAC4VZUD3RMrxg9lRp1Kit2');
  //   ref.onSnapshot((query) => {
  //       const objs = [];
  //       query.forEach((doc) => {
  //         objs.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setShopminders(objs);
  //     });
  // }
  //  console.log(appp)}, []

  // )
render(){
  return(
   //  <View >
  //   {/* {shopminders.map((obj) => (
  //     <View id={obj.id}>
  //       <Text>{obj.name}</Text>
  //     </View>
  //      ))} */}
  
   <Registerstack/>
   
  )}
}
export default App;


