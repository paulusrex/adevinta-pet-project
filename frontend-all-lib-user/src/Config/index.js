export default class Config {
  constructor() {
    this._config = {
      USER_API_HOST: 'https://skylabcoders.herokuapp.com/api'
    }
  }
  get(key) {
    return this._config[key]
  }
}
