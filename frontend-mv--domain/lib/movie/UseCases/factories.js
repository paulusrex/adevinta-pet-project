import SearchMoviesUseCase from './SearchMoviesUseCase'
import MovieRepositoriesFactories from '../Repositories/factories'

var MovieUseCasesFactories = function MovieUseCasesFactories() {}

MovieUseCasesFactories.searchMoviesUseCase = function(_ref) {
  var config = _ref.config
  return new SearchMoviesUseCase({
    repository: MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  })
}

export {MovieUseCasesFactories as default}
