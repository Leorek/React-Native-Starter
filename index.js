import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/Routes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Welcome'
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'Drawer' // unique ID registered with Navigation.registerScreen
    },
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  }
});