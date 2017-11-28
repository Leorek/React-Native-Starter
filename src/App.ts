import { Navigation } from 'react-native-navigation'
import { AsyncStorage } from 'react-native'
import { observe } from 'mobx'
import { registerScreens } from './Screens'
import Provider from './Utils/MobxRnnProvider'
import Stores from './Stores'
import AppIcons from './Utils/AppIcons'

class App {
  constructor() {
    this.init()
  }

  public async init() {
    await Stores.hydrateStores()
    registerScreens(Stores, Provider)
    observe(Stores.Account, 'authorized', change => {
      this.changeRoot()
    })
    this.changeRoot()
  }

  public changeRoot() {
    if (Stores.Account.authorized) {
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
        animationType: 'fade'
      })
    } else {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'Login',
          title: 'Login'
        },
        animationType: 'fade'
      })
    }
  }
}

export default new App()
