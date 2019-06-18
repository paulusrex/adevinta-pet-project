import MovieEntity from './MovieEntity'

export default class MoviesEntitiesFactories {
  static movieEntity = ({id, title}) => new MovieEntity({id, title})
}
