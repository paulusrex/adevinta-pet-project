import {UseCase} from '@s-ui/domain'

export default class CreateUserUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({email, password}) {
    const userEntity = await this._repository.create({email, password})
    return userEntity.toJSON()
  }
}
