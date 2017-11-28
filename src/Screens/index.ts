import { Navigation } from 'react-native-navigation'

import Main from './Main'
import Drawer from './Drawer'
import Login from './Modals/Login'

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent('Login', () => Login, store, Provider)
  Navigation.registerComponent('Main', () => Main, store, Provider)
  Navigation.registerComponent('Drawer', () => Drawer, store, Provider)
}
