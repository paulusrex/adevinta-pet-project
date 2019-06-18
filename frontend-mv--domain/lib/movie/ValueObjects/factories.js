import MovieListValueObject from './MovieListValueObject';
import MoviesEntitiesFactories from '../Entities/factories';

var MovieValueObjectsFactories = function MovieValueObjectsFactories() {};

MovieValueObjectsFactories.movieListValueObject = function (_ref) {
  var list = _ref.list;
  return new MovieListValueObject({
    listEntities: list.map(function (movie) {
      return MoviesEntitiesFactories.movieEntity({
        id: movie.id,
        title: movie.title
      });
    })
  });
};

export { MovieValueObjectsFactories as default };