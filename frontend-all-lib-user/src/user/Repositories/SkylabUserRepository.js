import UserRepository from './UserRepository'

const OK = 'OK'
// const KO = 'KO'

export default class SkylabUserRepository extends UserRepository {
  constructor({
    fetcher,
    config,
    userEntityFactory,
    genericUserErrorFactory,
    alreadyExistUserErrorFactory,
    wrongCredentialsUserErrorFactory,
    updateUserErrorFactory
  }) {
    super()
    this._app = 'adevinta-pet'
    this._fetcher = fetcher
    this._config = config
    this._userEntityFactory = userEntityFactory
    this._genericUserErrorFactory = genericUserErrorFactory
    this._alreadyExistUserErrorFactory = alreadyExistUserErrorFactory
    this._wrongCredentialsUserErrorFactory = wrongCredentialsUserErrorFactory
    this._updateUserErrorFactory = updateUserErrorFactory
  }

  async create({email, password, customData}) {
    const API_HOST = this._config.get('API_HOST')
    const res = await this._fetcher.post(
      `${API_HOST}/user`,
      {
        username: email,
        password,
        app: this._app,
        customData
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const {status, error} = res.data
    if (status !== OK) {
      if (/(already exists)$/.test(error))
        throw this._alreadyExistUserErrorFactory()
      throw this._genericUserErrorFactory()
    }
    const {id} = res.data.data

    return this._userEntityFactory({id, email, customData})
  }

  async authenticate({email, password}) {
    const API_HOST = this._config.get('API_HOST')
    let res
    try {
      res = await this._fetcher.post(
        `${API_HOST}/auth`,
        {
          username: email,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (err) {
      throw this._genericUserErrorFactory()
    }

    const {status} = res.data
    if (status !== OK) {
      throw this._wrongCredentialsUserErrorFactory()
    }
    const {token, id} = res.data.data
    const authData = {id, token}
    return authData
  }

  async retrieve({id, authData}) {
    const API_HOST = this._config.get('API_HOST')
    let res

    try {
      res = await this._fetcher.get(`${API_HOST}/user/${id}`, {
        headers: {Authorization: `Bearer ${authData.token}`}
      })
    } catch (err) {
      throw this._genericUserErrorFactory()
    }

    const {status} = res.data
    if (status !== OK) {
      throw this._genericUserErrorFactory
    }
    const {username, customData} = res.data.data
    return this._userEntityFactory({id, email: username, customData})
  }

  async update({id, customData, authData}) {
    const API_HOST = this._config.get('API_HOST')
    const res = await this._fetcher.put(
      `${API_HOST}/user/${id}`,
      {
        customData
      },
      {
        headers: {
          Authorization: `Bearer ${authData.token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    if (res.data.status !== OK) throw this._updateUserErrorFactory()
    return true
  }
}
