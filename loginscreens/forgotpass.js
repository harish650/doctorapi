import React from "react";
import { Button, TextInput ,View} from "react-native";
export default function forgotpass(){
    return(
        <View>
          <TextInput placeholder="Email-id"/>
            <TextInput placeholder="new password"/>
            <TextInput placeholder="re-enter password"/>
            <Button title='SetPassword'/>
        </View>
    );
}