import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';




class HelloWorld extends Component {
  render(){
    return (
      <View style={{
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center'
         }}>
        <View style={{width: 50, height:50, backgroundColor:'powderblue' }}/>
        <View style={{width: 50, height:50, backgroundColor: 'skyblue' }}/>
        <View style={{width: 50, height:50, backgroundColor: 'steelblue'}}/>
      </View>

    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
