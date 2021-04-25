import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FacebookScreen from './screens/fb';
import InstagramScreen from './screens/in'

export default class App extends React.Component {
  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:19,color:'#92e4e6'}}></Text>
        <AppContainer></AppContainer>
      </View>
      
    )
  }
}

const TabNavigator = createBottomTabNavigator({
    Facebook: {screen:FacebookScreen},
    Instagram: {screen:InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator)
