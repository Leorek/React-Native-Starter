import { create } from 'mobx-persist'
import { AsyncStorage } from 'react-native'

import Account from './Account'

const stores = {
  Account
}

const hydrate = create({ storage: AsyncStorage })

function hydrateStores() {
  return Promise.all([hydrate('Account', stores.Account)])
}

export default {
  ...stores,
  hydrateStores
}
