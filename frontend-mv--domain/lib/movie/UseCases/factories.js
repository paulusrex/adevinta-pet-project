import SearchMoviesUseCase from './SearchMoviesUseCase';
import MovieRepositoriesFactories from '../Repositories/factories';
import GetTrendingMoviesUseCase from './GetTrendingMoviesUseCase';
import GetDetailMovieUseCase from './GetDetailMovieUseCase';

var MovieUseCasesFactories = function MovieUseCasesFactories() {};

MovieUseCasesFactories.searchMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new SearchMoviesUseCase({
    config: config,
    repository: typeof Window === 'undefined' ? MovieRepositoriesFactories.inMemoryMovieRepository({
      config: config
    }) : MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

MovieUseCasesFactories.getTrendingMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new GetTrendingMoviesUseCase({
    config: config,
    repository: typeof Window === 'undefined' ? MovieRepositoriesFactories.inMemoryMovieRepository({
      config: config
    }) : MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

MovieUseCasesFactories.getDetailMovieUseCase = function (_ref3) {
  var config = _ref3.config;
  return new GetDetailMovieUseCase({
    config: config,
    repository: typeof Window === 'undefined' ? MovieRepositoriesFactories.inMemoryMovieRepository({
      config: config
    }) : MovieRepositoriesFactories.httpMovieRepository({
      config: config
    })
  });
};

export { MovieUseCasesFactories as default };