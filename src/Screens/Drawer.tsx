import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import { Button, Avatar, Text, List, ListItem } from 'react-native-elements'
import * as Id from 'shortid'

interface IDrawer {
  Account?: any
  navigator?: any
}

@inject('Account')
@observer
export default class Drawer extends Component<IDrawer, {}> {
  public render() {
    const { Account } = this.props
    let navigationItems = [
      { id: Id.generate(), title: 'Inicio', icon: 'home' },
      { id: Id.generate(), title: 'Mi perfil', icon: 'person' },
      { id: Id.generate(), title: 'Ajustes', icon: 'settings' },
      {
        id: Id.generate(),
        title: 'Cerrar sesión',
        icon: 'settings',
        onPress: () => Account.logout()
      }
    ]
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../Assets/drawerBackground.jpg')}
            resizeMethod="auto"
            resizeMode="stretch"
            style={styles.drawerTop}
          />
          <View style={styles.floatingContainer}>
            <Avatar
              width={65}
              height={65}
              rounded
              source={require('../Assets/defaultAvatar.jpg')}
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
                  onPress={item.onPress}
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
  drawerTop: {
    width: 300,
    height: 150
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
