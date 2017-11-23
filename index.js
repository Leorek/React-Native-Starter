import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/Routes'

registerScreens()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Welcome'
  },
  drawer: {
    left: {
      screen: 'Drawer'
    },
    disableOpenGesture: false
  }
})
