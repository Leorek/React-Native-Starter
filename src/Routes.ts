import {Navigation} from 'react-native-navigation';

import Landing from './Screens/Landing';
import Main from './Screens/Main';
import Drawer from './Screens/Drawer';

export function registerScreens() {
  Navigation.registerComponent('Landing', () => Landing);
  Navigation.registerComponent('Main', () => Main);
  Navigation.registerComponent('Drawer', () => Drawer);
}