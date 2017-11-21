import {Navigation} from 'react-native-navigation';

import Landing from './Screens/Landing';

export function registerScreens() {
  Navigation.registerComponent('Landing', () => Landing);
}