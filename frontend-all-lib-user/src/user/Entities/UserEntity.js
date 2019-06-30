import {Entity} from '@s-ui/domain'

export default class UserEntity extends Entity {
  constructor({id, email}) {
    super()
    this._id = id
    this._email = email
  }

  toJSON() {
    return {
      id: this._id,
      email: this._email
    }
  }
}
