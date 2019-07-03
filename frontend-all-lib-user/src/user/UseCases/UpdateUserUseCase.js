import {UseCase} from '@s-ui/domain'

export default class UpdateUserUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute({user, authData}) {
    return this._repository.update({
      id: user._id,
      customData: user._customData,
      authData
    })
  }
}
