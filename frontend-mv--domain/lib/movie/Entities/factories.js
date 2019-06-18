import MovieEntity from './MovieEntity';

var MoviesEntitiesFactories = function MoviesEntitiesFactories() {};

MoviesEntitiesFactories.movieEntity = function (_ref) {
  var id = _ref.id,
      title = _ref.title;
  return new MovieEntity({
    id: id,
    title: title
  });
};

export { MoviesEntitiesFactories as default };