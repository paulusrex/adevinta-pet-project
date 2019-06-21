import FetcherFactories from '../../Fetcher/factories'
import MovieEntityFactories from '../Entities/factories'
import MovieValueObjectsFactories from '../ValueObjects/factories'
import MovieErrorsFactories from '../Errors/factories'

import HTTPMovieRepository from './HTTPMovieRepository'
import InMemoryMovieRepository from './InMemoryMovieRepository'

export default class MovieRepositoriesFactories {
  static httpMovieRepository = ({config}) =>
    new HTTPMovieRepository({
      config,
      movieEntityFactory: MovieEntityFactories.movieEntity,
      movieListValueObjectFactory:
        MovieValueObjectsFactories.movieListValueObject,
      fetcher: FetcherFactories.httpFetcher({config}),
      notFoundMovieErrorFactory: MovieErrorsFactories.notFoundMovieError,
      genericMovieErrorFactory: MovieErrorsFactories.genericMovieError
    })

  static inMemoryMovieRepository = ({config}) =>
    new InMemoryMovieRepository({
      config,
      movieEntityFactory: MovieEntityFactories.movieEntity,
      movieListValueObjectFactory:
        MovieValueObjectsFactories.movieListValueObject
    })
}
