import SearchMoviesUseCase from './SearchMoviesUseCase'
import MovieRepositoriesFactories from '../Repositories/factories'
import GetTrendingMoviesUseCase from './GetTrendingMoviesUseCase'
import GetDetailMovieUseCase from './GetDetailMovieUseCase'

export default class MovieUseCasesFactories {
  static searchMoviesUseCase = ({config}) =>
    new SearchMoviesUseCase({
      config,
      repository:
        typeof Window === 'undefined'
          ? MovieRepositoriesFactories.inMemoryMovieRepository({config})
          : MovieRepositoriesFactories.httpMovieRepository({config})
    })

  static getTrendingMoviesUseCase = ({config}) =>
    new GetTrendingMoviesUseCase({
      config,
      repository:
        typeof Window === 'undefined'
          ? MovieRepositoriesFactories.inMemoryMovieRepository({config})
          : MovieRepositoriesFactories.httpMovieRepository({config})
    })

  static getDetailMovieUseCase = ({config}) =>
    new GetDetailMovieUseCase({
      config,
      repository:
        typeof Window === 'undefined'
          ? MovieRepositoriesFactories.inMemoryMovieRepository({config})
          : MovieRepositoriesFactories.httpMovieRepository({config})
    })
}
