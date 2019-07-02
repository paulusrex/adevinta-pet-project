import {Entity} from '@s-ui/domain'

export default class UserEntity extends Entity {
  constructor({id, email, customData}) {
    super()
    this._id = id
    this._email = email
    this._customData = customData
  }

  toJSON() {
    return {
      id: this._id,
      email: this._email,
      customData: this._customData
    }
  }
}
