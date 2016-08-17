import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';




class HelloWorld extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 8, backgroundColor: 'steelblue'}}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  bigblue:  {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red:{
    color: 'red',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
