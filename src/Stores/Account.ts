import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

import Models from './Models'

class AccountStore {
  @persist('object', Models.Account)
  @observable
  public current: any = new Models.Account()
  @persist
  @observable
  public authorized: boolean = false

  @action
  public login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
      if (username && password) {
        this.authorized = true
        this.current = { username, password }
        resolve({ message: 'success' })
      } else {
        reject({ message: 'Something is wrong with input data :(' })
      }
    })
  }

  @action
  public logout = () => {
    return new Promise((resolve, reject) => {
      this.authorized = false
      this.current = {}

      resolve()
    })
  }
}

export default new AccountStore()
