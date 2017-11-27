import Icon from 'react-native-vector-icons/Ionicons'

class AppIcons {
  public static async prepareIcons() {
    return Promise.all([
      Icon.getImageSource('ios-home', 30),
      Icon.getImageSource('ios-search', 30),
      Icon.getImageSource('ios-add-circle', 60),
      Icon.getImageSource('ios-heart', 30),
      Icon.getImageSource('ios-person', 30)
    ])
  }
}

export default AppIcons
