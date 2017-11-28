import { observable, computed } from 'mobx'
import { persist } from 'mobx-persist'

class Account {
  @persist
  @observable
  public username = 'username'
  @persist
  @observable
  public password = 'password'
}

export default Account
