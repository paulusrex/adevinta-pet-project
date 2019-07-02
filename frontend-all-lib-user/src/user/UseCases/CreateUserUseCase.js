import {UseCase} from '@s-ui/domain'

export default class CreateUserUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({email, password, customData}) {
    const userEntity = await this._repository.create({
      email,
      password,
      customData
    })
    return userEntity.toJSON()
  }
}
