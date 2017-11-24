import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'

export default class Drawer extends Component {
  public doNothing() {
    const a = 3 + 2
  }
  public render() {
    return (
      <View style={styles.container}>
        <Button raised title="Test button" onPress={this.doNothing} backgroundColor="green" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  }
})
