export default class Config {
  constructor() {
    this._config = {
      API_HOST: 'https://api.themoviedb.org/3',
      API_KEY: '3745ae4257e4e699f7753c7133744012',
      USER_API_HOST: 'https://skylabcoders.herokuapp.com/api'
    }
  }
  get(key) {
    return this._config[key]
  }
}
