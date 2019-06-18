import {UseCase} from '@s-ui/domain'

export default class SearchMoviesUseCase extends UseCase {
  constructor({config, repository}) {
    super()
    this._config = config
    this._repository = repository
  }
  async execute({keyword}) {
    const movieListValueObject = await this._repository.search({keyword})
    return movieListValueObject.toJSON()
  }
}
