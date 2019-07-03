import _UserEntity from 'perixo20-mv-user/lib/user/Entities/UserEntity'

export default class UserEntity extends _UserEntity {
  constructor({id, email, customData}) {
    super({id, email, customData: {favs: [], ...customData}})
  }

  replaceFavs(favs) {
    this._customData.favs = favs.slice()
  }

  pushFav(id) {
    return (this._customData.favs = [...this._customData.favs, id].filter(
      (v, i, a) => a.findIndex(v) === i
    ))
  }

  removeFav(id) {
    return (this._customData.favs = this.customData.favs.filter(
      _id => _id !== id
    ))
  }

  getFav() {
    return this._customData.favs.slice()
  }
}
