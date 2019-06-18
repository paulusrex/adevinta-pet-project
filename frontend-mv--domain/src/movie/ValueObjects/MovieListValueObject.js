import {ValueObject} from '@s-ui/domain'

export default class MovieListValueObject extends ValueObject {
  constructor({list}) {
    super()
    this._list = list
  }

  toJSON() {
    return this._list.map(movieEntity => movieEntity.toJSON())
  }
}
