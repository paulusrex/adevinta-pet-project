import {UseCase} from '@s-ui/domain'

export default class GetTrendingMoviesUseCase extends UseCase {
  constructor({repository}) {
    super()
    this._repository = repository
  }
  async execute() {
    const movieListValueObject = await this._repository.getTrending()
    return {list: movieListValueObject.toJSON()}
  }
}
