import { create } from 'mobx-persist'
import { AsyncStorage } from 'react-native'

import Account from './Account'

const hydrate = create({ storage: AsyncStorage })

const stores = {
  Account
}

hydrate('Account', stores.Account)

export default {
  ...stores
}
