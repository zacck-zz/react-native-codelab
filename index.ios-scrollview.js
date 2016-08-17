import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';

//This is a component sort of like an activity
class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me pls!</Text>
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Text style={{fontSize: 96}}>If you like it</Text>
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Text style={{fontSize:96}}>Scrolling Down</Text>
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Text style={{fontSize:96}}>Whats the best ?</Text>
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Image source={require('./img/drink.png')} />
        <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
