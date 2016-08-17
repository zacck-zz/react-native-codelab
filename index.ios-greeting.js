import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class HelloWorld extends Component {
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='zacck'/>
        <Greeting name='keegs'/>
        <Greeting name='nick'/>
      </View>
    );
  }
}

class Greeting extends Component {
  render(){
    return (
      <Text>Hellp {this.props.name}!</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
