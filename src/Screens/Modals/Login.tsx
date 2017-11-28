import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import { SocialIcon, Avatar } from 'react-native-elements'
import { Navigation } from 'react-native-navigation'

interface ILogin {
  Account: any
  navigator?: any
}

@inject('Account')
@observer
export default class Login extends Component<ILogin, {}> {
  public static navigatorStyle = {
    navBarHidden: true,
    statusBarColor: '#500077'
  }

  public render() {
    const { Account } = this.props
    return (
      <View style={styles.container}>
        <Avatar
          width={160}
          height={160}
          rounded
          source={{
            uri:
              'https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger/public/field/image/2015/04/halo-5-master-chief.jpg?itok=Rt_ff5R2'
          }}
          activeOpacity={0.7}
          containerStyle={styles.avatar}
        />
        <SocialIcon
          style={{ width: 200 }}
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={() => Account.login('user', 'user')}
        />
        <SocialIcon style={{ width: 200 }} title="Sign In With Twitter" button type="twitter" />
        <SocialIcon style={{ width: 200 }} title="Sign In With Instagram" button type="instagram" />
        <SocialIcon style={{ width: 200 }} title="Sign In With Twitch" button type="twitch" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#500077'
  },
  avatar: {
    marginBottom: 30
  }
})
