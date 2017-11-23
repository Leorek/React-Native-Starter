import React, { Component } from 'react';
import {
    Button,
    View,
    StyleSheet
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    button: {
      marginTop: 16
    }
});

export default class Drawer extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Button title="Test button" style={styles.button}/>
          </View>
        );
    }
}