import {UseCase} from '@s-ui/domain'

export default class AuthenticateUserUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({email, password}) {
    return this._repository.authenticate({email, password})
  }
}
