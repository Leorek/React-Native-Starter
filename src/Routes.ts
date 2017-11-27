import { Navigation } from 'react-native-navigation'

import Main from './Screens/Main'
import Drawer from './Screens/Drawer'
import Login from './Screens/Login'

export function registerScreens() {
  Navigation.registerComponent('Login', () => Login)
  Navigation.registerComponent('Main', () => Main)
  Navigation.registerComponent('Drawer', () => Drawer)
}
