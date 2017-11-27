import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { Button, Avatar, Text, List, ListItem } from 'react-native-elements'
import * as Id from 'shortid'

export default class Drawer extends Component {
  public render() {
    let navigationItems = [
      { id: Id.generate(), title: 'Inicio', icon: 'home' },
      { id: Id.generate(), title: 'Mi perfil', icon: 'person' },
      { id: Id.generate(), title: 'Ajustes', icon: 'settings' }
    ]
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: 'https://wallpapersite.com/images/pages/pic_w/4311.jpg',
              width: 300,
              height: 150
            }}
            resizeMethod="auto"
            resizeMode="stretch"
          />
          <View style={styles.floatingContainer}>
            <Avatar
              width={65}
              height={65}
              rounded
              source={{
                uri:
                  'https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger/public/field/image/2015/04/halo-5-master-chief.jpg?itok=Rt_ff5R2'
              }}
              activeOpacity={0.7}
            />
            <Text style={styles.nickname}>Juan Alberto</Text>
            <Text style={styles.subnickname}>japc93k@gmail.com</Text>
          </View>
        </View>
        <List containerStyle={styles.list}>
          <FlatList
            data={navigationItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <ListItem
                  title={item.title}
                  leftIcon={{ name: item.icon, color: 'black' }}
                  titleStyle={styles.listitem}
                  hideChevron
                />
              )
            }}
          />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    backgroundColor: '#ffffff'
  },
  floatingContainer: {
    position: 'absolute',
    top: '10%',
    left: '5%'
  },
  navigation: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nickname: {
    color: 'white',
    fontSize: 15,
    top: '20%',
    fontWeight: 'bold'
  },
  subnickname: {
    color: 'white',
    fontSize: 12,
    top: '23%'
  },
  list: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  listitem: {
    fontSize: 16,
    left: 20
  }
})
