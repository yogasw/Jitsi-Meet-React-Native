import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Home from '../Screens/Home';
import React from "react";
import {Text, View} from "react-native"
import videoService from "../Screens/videoService";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },videoService: {
    screen: videoService,
  }
}, {
  // headerMode: 'none',
  defaultNavigationOptions: {
    // headerVisible: true,
    header:(
        <View style={{width:"100%", alignItems:"center",padding:15, backgroundColor:'blue'}}>
          <Text style={{fontSize:20, fontWeight:"bold", color:'white'}}>Video Conference</Text>
        </View>
    )
  },
});

const appContainer = createAppContainer(AppNavigator);
export default appContainer;
