import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'

interface ILanding {
  navigator?: any
}

export default class Landing extends Component<ILanding, {}> {
  public static navigatorStyle = {
    navBarBackgroundColor: '#500077',
    navBarTextColor: '#FFFFFF',
    statusBarColor: '#500077'
  }

  public static navigatorButtons = {
    leftButtons: [
      {
        id: 'sideMenu',
        buttonColor: 'white'
      }
    ]
  }

  public constructor(props) {
    super(props)
    this.clearToken = this.clearToken.bind(this)
  }

  public clearToken() {
    AsyncStorage.removeItem('loginToken')
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Starter App.</Text>
        <Button title={'Remove login token'} onPress={this.clearToken} backgroundColor="red" />
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
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  }
})
