import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
//import App from "../App";
import Register from "../loginscreens/register";
import Maincreen from "../loginscreens/maincreen";
import Forgotpass from "../loginscreens/forgotpass";
import Homepa from "../patientscreens/homepa";
import Doctorlist from "../patientscreens/doctorlist";
import Chatscreen from "../patientscreens/chatscreen";
import Homeda from "../doctorscreens/homeda";
import Selectscreen from "../doctorscreens/selectscreen";
import Appointorder from "../doctorscreens/appointorder";
import Appointprint from "../patientscreens/appointprint";

    
            const screens={
             maincreen:{
                    screen:Maincreen,
                },
                register:{
                    screen:Register
                },
                forgotpass:{
                    screen:Forgotpass
                },
                homepa:{
                    screen:Homepa
                },
                chatscreen:{
                    screen:Chatscreen
                },
                doctorlist:{
                    screen:Doctorlist
                },
                appointprint:{
                    screen:Appointprint
                },
              
                selectscreen:{
                    screen:Selectscreen
                },
                homeda:{
                    screen:Homeda
                },
                appointorder:{
                    screen:Appointorder
                }
            }
    
     const homescreen=createStackNavigator(screens)
     export default createAppContainer(homescreen)