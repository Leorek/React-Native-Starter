import { Navigation } from 'react-native-navigation'
import { AsyncStorage } from 'react-native'
import { observe } from 'mobx'
import { registerScreens } from './Screens'
import Provider from './Utils/MobxRnnProvider'
import Stores from './Stores'
import AppIcons from './Utils/AppIcons'

registerScreens(Stores, Provider)

class App {
  constructor() {
    this.changeRoot()
    observe(Stores.Account, 'authorized', change => {
      this.changeRoot()
    })
  }
  public async changeRoot() {
    console.log('Executing change root')
    const iconsLoaded = await AppIcons.prepareIcons()
    if (Stores.Account.authorized) {
      console.log('Authorized')
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'Main',
          title: 'Main'
        },
        drawer: {
          left: {
            screen: 'Drawer'
          },
          disableOpenGesture: false
        },
        passProps: { icons: iconsLoaded }
      })
    } else {
      console.log('Not Authorized')
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'Login',
          title: 'Login'
        }
      })
    }
  }
}

export default new App()
