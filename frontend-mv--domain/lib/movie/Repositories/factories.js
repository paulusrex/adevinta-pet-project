import FetcherFactories from '../../Fetcher/factories';
import MovieEntityFactories from '../Entities/factories';
import MovieValueObjectsFactories from '../ValueObjects/factories';
import MovieErrorsFactories from '../Errors/factories';
import HTTPMovieRepository from './HTTPMovieRepository';
import InMemoryMovieRepository from './InMemoryMovieRepository';

var MovieRepositoriesFactories = function MovieRepositoriesFactories() {};

MovieRepositoriesFactories.httpMovieRepository = function (_ref) {
  var config = _ref.config;
  return new HTTPMovieRepository({
    config: config,
    movieEntityFactory: MovieEntityFactories.movieEntity,
    movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
    fetcher: FetcherFactories.httpFetcher({
      config: config
    }),
    notFoundMovieErrorFactory: MovieErrorsFactories.notFoundMovieError,
    genericMovieErrorFactory: MovieErrorsFactories.genericMovieError
  });
};

MovieRepositoriesFactories.inMemoryMovieRepository = function (_ref2) {
  var config = _ref2.config;
  return new InMemoryMovieRepository({
    config: config,
    movieEntityFactory: MovieEntityFactories.movieEntity,
    movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject
  });
};

export { MovieRepositoriesFactories as default };