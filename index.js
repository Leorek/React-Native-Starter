import { Navigation } from 'react-native-navigation'
import { AsyncStorage } from 'react-native'
import { registerScreens } from './src/Routes'
import AppIcons from './src/Utils/AppIcons'

async function startApp() {
  const iconsLoaded = await AppIcons.prepareIcons()
  const logged = await AsyncStorage.getItem('loginToken')

  registerScreens()

  if (logged) {
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
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Login',
        title: 'Login'
      }
    })
  }
}

startApp()
