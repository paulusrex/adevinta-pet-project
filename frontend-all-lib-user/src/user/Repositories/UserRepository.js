import {Repository} from '@s-ui/domain'

export default class UserRepository extends Repository {
  create() {
    throw new Error('[UserRepository#create]')
  }
  login() {
    throw new Error('[UserRepository#login]')
  }
}
