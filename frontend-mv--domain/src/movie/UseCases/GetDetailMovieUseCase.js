import {UseCase} from '@s-ui/domain'

export default class GetDetailMovieUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({id}) {
    const movieEntity = await this._repository.detail({id})
    return movieEntity.toJSON()
  }
}
