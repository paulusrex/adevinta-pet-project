import {UseCase} from '@s-ui/domain'

export default class UpdateUserUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({id, customData, authData}) {
    return this._repository.update({id, customData, authData})
  }
}
