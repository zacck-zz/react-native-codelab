import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet,ListView,  ScrollView, TextInput } from 'react-native';

//This is a component sort of like an activity
class HelloWorld extends Component {
  //init the data for the list
  constructor(props) {
    super(props);
    //confgure a data store
    const DataStore = new ListView.DataSource ({rowHasChanged: (r1, r2) => {r !== r2}});
    this.state = {
      dataSource: DataStore.cloneWithRows([
        'nick', 'marike', 'paula','lee','jeff', 'tracy-lee', 'terri-anne'
      ])
    };

  }
  render(){
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {{rowData => <Text>{rowData}</Text>}}
        />
      </View>
    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
