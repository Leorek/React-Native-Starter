import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

interface ILanding {
  navigator?: any
}

export default class Landing extends Component<ILanding, {}> {
  public static navigatorStyle = {
    navBarHidden: true
  }
  private that = this

  public goMain() {
    this.props.navigator.push({ screen: 'Main', title: 'Main' })
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Starter App.</Text>
        <Text style={styles.instructions}>Let's start with a simple navigation.</Text>
        <Button title={'Go to Main Screen'} onPress={this.goMain} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  }
})
