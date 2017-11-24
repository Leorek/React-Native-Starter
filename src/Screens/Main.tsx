import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

export default class Main extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Main Screen</Text>
        <Text style={styles.instructions}>This is the main screen of this app.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
