import {Entity} from '@s-ui/domain'

export default class UserEntity extends Entity {
  constructor({id, email, authData}) {
    super()
    this._id = id
    this._email = email
    this._authData = authData
  }

  toJSON() {
    return {
      id: this._id,
      email: this._email,
      authData: this._authData
    }
  }
}
