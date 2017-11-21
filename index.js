import {Navigation} from 'react-native-navigation';
import {registerScreens} from './Routes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Welcome'
  }
});