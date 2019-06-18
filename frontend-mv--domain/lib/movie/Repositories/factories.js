import FetcherFactories from '../../Fetcher/factories';
import MovieValueObjectsFactories from '../ValueObjects/factories';
import HTTPMovieRepository from './HTTPMovieRepository';

var MovieRepositoriesFactories = function MovieRepositoriesFactories() {};

MovieRepositoriesFactories.httpMovieRepository = function (_ref) {
  var config = _ref.config;
  return new HTTPMovieRepository({
    config: config,
    movieListValueObjectFactory: MovieValueObjectsFactories.movieListValueObject,
    fetcher: FetcherFactories.httpFetcher({
      config: config
    })
  });
};

export { MovieRepositoriesFactories as default };