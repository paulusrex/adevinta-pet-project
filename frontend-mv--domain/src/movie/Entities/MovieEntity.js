import {Entity} from '@s-ui/domain'

export default class MovieEntity extends Entity {
  constructor({id, title}) {
    super()
    this._id = id
    this._title = title
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title
    }
  }
}
