import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default class Drawer extends Component {
  public doNothing() {
    const a = 3 + 2
  }
  public render() {
    return (
      <View style={styles.container}>
        <Button title="Test button" onPress={this.doNothing} />
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
