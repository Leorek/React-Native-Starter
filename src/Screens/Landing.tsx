import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Landing extends Component {
  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return ( 
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Starter App.
        </Text>
        <Text style={styles.instructions}>
          Let's start with a simple navigation.
        </Text>
        <Button title={"Go to Main Screen"} onPress={()=>{this.props.navigator.push({ screen: 'Main', title: "Main"})}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
