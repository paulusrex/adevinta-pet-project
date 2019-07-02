import {Repository} from '@s-ui/domain'

export default class UserRepository extends Repository {
  create() {
    throw new Error('[UserRepository#create]')
  }
  authenticate() {
    throw new Error('[UserRepository#authenticate]')
  }
  retrieve() {
    throw new Error('[UserRepository#retrieve]')
  }
}
