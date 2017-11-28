import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import { Button } from 'react-native-elements'

interface ILanding {
  Account: any
  navigator?: any
}

@inject('Account')
@observer
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

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Starter App.</Text>
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
