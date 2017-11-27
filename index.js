import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/Routes'
import AppIcons from './src/Utils/AppIcons'

async function startApp() {
  const iconsLoaded = await AppIcons.prepareIcons()
  console.log('Icons loaded')
  registerScreens()

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Landing',
      title: 'Landing'
    },
    drawer: {
      left: {
        screen: 'Drawer'
      },
      disableOpenGesture: false
    },
    passProps: { icons: iconsLoaded }
  })
}

startApp()
