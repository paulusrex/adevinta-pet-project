import {UseCase} from '@s-ui/domain'

export default class RetrieveUserUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({id, authData}) {
    const userEntity = await this._repository.retrieve({id, authData})
    return userEntity.toJSON()
  }
}
