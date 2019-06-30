import UserRepository from './UserRepository'

export default class SkylabUserRepository extends UserRepository {
  constructor({
    fetcher,
    config,
    userEntityFactory,
    genericUserErrorFactory,
    alreadyExistUserErrorFactory
  }) {
    super()
    this._app = 'adevinta-pet'
    this._fetcher = fetcher
    this._config = config
    this._userEntityFactory = userEntityFactory
    this._genericUserErrorFactory = genericUserErrorFactory
    this._alreadyExistUserErrorFactory = alreadyExistUserErrorFactory
  }

  async create({email, password}) {
    const API_HOST = this._config.get('API_HOST')
    const res = await this._fetcher.post(
      `${API_HOST}/user`,
      {
        username: email,
        password,
        app: this._app
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const {status, message} = res.data
    if (status !== 'OK') {
      if (message === 'duplicate') throw this._alreadyExistUserErrorFactory()
      throw this._genericUserErrorFactory
    }
    const {id} = res.data.data
    return this._userEntityFactory({id, email})
  }
}
